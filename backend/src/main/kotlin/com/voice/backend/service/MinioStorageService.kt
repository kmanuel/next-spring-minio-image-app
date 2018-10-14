package com.voice.backend.service

import com.voice.backend.dao.StorageDataDao
import com.voice.backend.model.StorageData
import com.voice.backend.model.UploadedItem
import io.minio.messages.Item
import org.springframework.stereotype.Service
import org.springframework.web.multipart.MultipartFile
import java.io.InputStream
import java.nio.file.Path
import java.util.*

@Service
class MinioStorageService(
        val fileUploader: FileUploader,
        val fileSystemStorageService: FileSystemStorageService,
        val storageDataDao: StorageDataDao
) : StorageService {

    override fun getItemStream(name: String): InputStream = fileUploader.getItemStream(name)

    override fun storeFile(multipartFile: MultipartFile): StorageData {
        val uuid = UUID.randomUUID()
        val filePath: Path = fileSystemStorageService.store(multipartFile)

        fileUploader.upload(filePath, uuid)

        val name = filePath.fileName.toString()
        val created = Date()

        val storageData = StorageData(uuid, name, created)

        return storageDataDao.save(storageData)
    }

    override fun getItems(): List<UploadedItem> = fileUploader.listFiles()
            .map { result -> result.get() }
            .map { result -> toUploadItem(result) }

    fun toUploadItem(result: Item) =
            UploadedItem(
                    result.objectName().substringBefore('.'),
                    result.objectName(),
                    "http://www.example.com")
}