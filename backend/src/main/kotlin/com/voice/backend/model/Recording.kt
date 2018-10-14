package com.voice.backend.model

import java.util.*
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id

@Entity
class Recording(
        @Id
        @GeneratedValue
        val id: Long? = null,
        val date: Date,
        val fileId: UUID) {
}