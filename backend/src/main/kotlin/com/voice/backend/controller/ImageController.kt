package com.voice.backend.controller

import com.voice.backend.dao.StorageDataDao
import com.voice.backend.model.ImageData
import com.voice.backend.model.StorageData
import com.voice.backend.service.StorageService
import org.springframework.http.MediaType.*
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import org.springframework.web.multipart.MultipartFile
import org.springframework.web.servlet.support.ServletUriComponentsBuilder
import java.util.*

@RestController
@RequestMapping("images")
@CrossOrigin(origins = ["*"])
class ImageController(
        val storageService: StorageService,
        val storageDataDao: StorageDataDao) {

    @GetMapping(
            value = "{name}",
            produces = arrayOf(IMAGE_JPEG_VALUE, IMAGE_GIF_VALUE, IMAGE_PNG_VALUE))
    fun getImage(@PathVariable name: String) = storageService.getItemStream(name).readAllBytes()

    @GetMapping("{id}/data")
    fun getImageData(@PathVariable id: UUID): ImageData {
        val key = id
        val data = storageDataDao.findById(id).orElseThrow { IllegalArgumentException() }
        val filename = data.name
        val url = ServletUriComponentsBuilder.fromCurrentContextPath().path("/images/$id").build().toUriString()
        return ImageData(key.toString(), filename, url, data.uploadDate)
    }

    @GetMapping
    fun getImages(): List<StorageData> {
        return storageDataDao.findAll().toList()
    }

    @PostMapping
    fun upload(@RequestParam("file") uploadedFile: MultipartFile): ResponseEntity<StorageData> {
        return ResponseEntity.ok(storageService.storeFile(uploadedFile))
    }

}
