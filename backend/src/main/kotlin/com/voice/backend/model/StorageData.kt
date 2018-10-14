package com.voice.backend.model

import java.util.*
import javax.persistence.Entity
import javax.persistence.Id

@Entity
class StorageData(
        @Id
        val id: UUID,
        val name: String,
        val uploadDate: Date)