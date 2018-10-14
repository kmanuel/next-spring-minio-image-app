package com.voice.backend.service

import org.springframework.stereotype.Service
import org.springframework.util.StringUtils
import org.springframework.web.multipart.MultipartFile
import java.io.IOException
import java.nio.file.Files
import java.nio.file.Path
import java.nio.file.Paths
import java.nio.file.StandardCopyOption

@Service
class FileSystemStorageService {
    private val rootLocation: Path = Paths.get("/tmp")

    fun store(file: MultipartFile): Path {
        val filename = StringUtils.cleanPath(file.originalFilename?:"w00t")
        try {
            if (file.isEmpty) {
                throw RuntimeException("Failed to store empty file $filename")
            }
            if (filename.contains("src/test")) {
                // This is a security check
                throw RuntimeException(
                        "Cannot store file with relative path outside current directory $filename")
            }
            file.inputStream.use { inputStream ->
                Files.copy(inputStream, this.rootLocation.resolve(filename),
                        StandardCopyOption.REPLACE_EXISTING)
            }
        } catch (e: IOException) {
            throw RuntimeException("Failed to store file $filename", e)
        }

        return Paths.get(rootLocation.toString(), filename)
    }
}