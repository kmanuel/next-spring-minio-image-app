package com.voice.backend.service

import io.minio.MinioClient
import io.minio.Result
import io.minio.messages.Item
import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Service
import java.io.InputStream
import java.nio.file.Path
import java.util.*

@Service
class FileUploader(@Value("\${minio.host}") val minioHost: String,
                   @Value("\${minio.accesskey}") val accessKey: String,
                   @Value("\${minio.secretkey}") val secretKey: String) {

    private final val client: MinioClient
    private final val BUCKET_NAME = "asiatrip"

    init {
        this.client = createClient()
        createBucketIfNotExists()
    }

    private final fun createClient(): MinioClient {
        return MinioClient(
                minioHost,
                accessKey,
                secretKey
        )
    }

    private final fun createBucketIfNotExists() {
        val bucketExists = client.bucketExists(BUCKET_NAME)
        if (!bucketExists) {
            client.makeBucket(BUCKET_NAME)
        }
    }

    fun upload(file: Path, uuid: UUID) = client.putObject(BUCKET_NAME, uuid.toString(), file.toAbsolutePath().toString())

    fun listFiles(): List<Result<Item>> = client.listObjects(BUCKET_NAME).toList()

    fun getItemStream(name: String): InputStream = client.getObject(BUCKET_NAME, name)

}