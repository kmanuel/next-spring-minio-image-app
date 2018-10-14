package com.voice.backend.dao

import com.voice.backend.model.StorageData
import org.springframework.data.repository.CrudRepository
import java.util.*

interface StorageDataDao: CrudRepository<StorageData, UUID> {
}