package com.ghargyan.Login.dto;

public class RegisterResponse {

    private String message;
    private String name;
    private String email;

    public RegisterResponse(String message, String name, String email) {
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