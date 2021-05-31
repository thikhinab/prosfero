package com.caritas.prosfero.login;

import com.caritas.prosfero.appuser.AppUser;
import com.caritas.prosfero.registration.RegistrationRequest;
import lombok.AllArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping({"/api/v1/login"})
@AllArgsConstructor
@CrossOrigin("http://localhost:3000/")
public class LoginController {

    private final LoginService loginService;

    @PostMapping
    public AppUser login(@RequestBody RegistrationRequest request) {
        System.out.println("I reached this point");
        return loginService.getUserDetails(request.getUsername());
    }
}
