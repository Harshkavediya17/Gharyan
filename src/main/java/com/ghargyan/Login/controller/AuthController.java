package com.ghargyan.Login.controller;

import com.ghargyan.Login.dto.RegisterResponse;
import com.ghargyan.Login.entity.User;
import com.ghargyan.Login.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.ghargyan.Login.dto.LoginRequest;
import com.ghargyan.Login.dto.LoginResponse;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<RegisterResponse> register(@RequestBody User user) {

        User registeredUser = userService.registerUser(user);

        RegisterResponse response = new RegisterResponse(
                "Registration successful",
                registeredUser.getName(),
                registeredUser.getEmail()
        );

        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(
            @RequestBody LoginRequest request) {

        User user = userService.loginUser(
                request.getEmail(),
                request.getPassword()
        );

        LoginResponse response = new LoginResponse(
                "Login successful",
                user.getName(),
                user.getEmail()
        );

        return ResponseEntity.ok(response);
    }
}