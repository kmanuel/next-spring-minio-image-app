package com.voice.backend.config

import com.voice.backend.model.Recording
import com.voice.backend.dao.RecordingDao
import org.springframework.boot.CommandLineRunner
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import java.util.*

@Configuration
class Initializer {

    @Bean
    fun fillData(recordingDao: RecordingDao): CommandLineRunner {
        return CommandLineRunner { _ ->
            for (i in 1..10) {
                recordingDao.save(Recording(date = Date(), fileId = UUID.randomUUID()))
            }
        }
    }
}