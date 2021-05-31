package com.caritas.prosfero.login;

import com.caritas.prosfero.appuser.AppUser;
import com.caritas.prosfero.appuser.AppUserRepository;
import com.caritas.prosfero.appuser.AppUserService;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class LoginService {

    private final AppUserRepository appUserRepository;

    public AppUser getUserDetails(String username) {
       return appUserRepository.findByUsername(username).orElseThrow(() -> new IllegalStateException("Username not found."));
    }
}
