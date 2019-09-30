import { OnLineUsersService } from './online-users.service'
import { UserProfileService } from './user-profile.service'
import { HttpClient } from '@angular/common/http'

export let serviceFactory = (profileService: UserProfileService, client : HttpClient) => {
    console.log('=============>>>> serviceFactory: OnLineUsersService')
    return new OnLineUsersService(profileService, client)
}