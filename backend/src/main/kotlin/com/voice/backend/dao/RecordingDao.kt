package com.voice.backend.dao

import com.voice.backend.model.Recording
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface RecordingDao: CrudRepository<Recording, Long>