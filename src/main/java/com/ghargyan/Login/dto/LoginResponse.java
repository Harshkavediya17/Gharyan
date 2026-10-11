package com.ghargyan.Login.dto;

public class LoginResponse {

    private final String message;
    private final String name;
    private final String email;

    public LoginResponse(String message, String name, String email) {
        this.message = message;
        this.name = name;
        this.email = email;
    }

    public String getMessage() {
        return message;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }
}