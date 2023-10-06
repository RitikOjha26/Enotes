package com.example.demo.component;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import reactor.core.publisher.Mono;

@RestController

public class SampleComponent {
    @GetMapping("/sample1")
    Mono<String> sample1() {
        return Mono.just("please chal jaaa");
    }
}
