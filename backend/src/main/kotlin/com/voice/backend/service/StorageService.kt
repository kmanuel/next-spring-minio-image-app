package com.voice.backend.service

import com.voice.backend.model.StorageData
import com.voice.backend.model.UploadedItem
import org.springframework.web.multipart.MultipartFile
import java.io.InputStream

interface StorageService {

    fun storeFile(multipartFile: MultipartFile): StorageData

    fun getItems(): List<UploadedItem>

    fun getItemStream(name: String): InputStream

}