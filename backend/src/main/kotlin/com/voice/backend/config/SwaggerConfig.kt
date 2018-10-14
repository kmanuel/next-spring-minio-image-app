package com.voice.backend.config

import com.google.common.base.Predicate
import com.google.common.base.Predicates.or
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import springfox.documentation.builders.ApiInfoBuilder
import springfox.documentation.builders.PathSelectors.regex
import springfox.documentation.service.ApiInfo
import springfox.documentation.spi.DocumentationType
import springfox.documentation.spring.web.plugins.Docket
import springfox.documentation.swagger2.annotations.EnableSwagger2

@Configuration
@EnableSwagger2
class SwaggerConfig {

    @Bean
    fun api() = Docket(DocumentationType.SWAGGER_2)
                .groupName("record")
                .apiInfo(apiInfo())
                .select()
                .paths(postPaths())
                .build()

    private fun apiInfo(): ApiInfo = ApiInfoBuilder().title("Recording API").build()

    private fun postPaths(): Predicate<String> = or(
            regex("/recordings.*"),
            regex("/images.*"),
            regex("/test.*")
    )

}