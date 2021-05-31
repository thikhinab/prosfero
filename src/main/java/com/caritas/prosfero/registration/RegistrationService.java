package com.caritas.prosfero.registration;

import com.caritas.prosfero.appuser.AppUser;
import com.caritas.prosfero.appuser.AppUserRole;
import com.caritas.prosfero.appuser.AppUserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@AllArgsConstructor
public class RegistrationService {

    private final AppUserService appUserService;
    private final EmailValidator emailValidator;
    private final UsernameValidator usernameValidator;

    public String register(RegistrationRequest request) {
        boolean isValidEmail = emailValidator.test(request.getEmail());
        boolean isValidUsername = usernameValidator.test(request.getUsername());

        if (!isValidEmail) {
            throw new IllegalStateException("Email is not valid");
        }

        if (!isValidUsername) {
            throw new IllegalStateException("Email is not valid");
        }

        AppUser appUser = appUserService.signUpUser(
                new AppUser(
                        request.getFirstName(),
                        request.getLastName(),
                        request.getUsername(),
                        request.getEmail(),
                        request.getPassword(),
                        AppUserRole.USER
                )
        );

        return "SUCCESS";
    }

}
