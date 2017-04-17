export const settings: any = {
    authority: 'http://localhost:5000/',
    client_id: 'pepesApp-implicit',
    redirect_uri: 'http://localhost:4200/callback.html',
    popup_redirect_uri: 'http://localhost:4200/popup.html',
    post_logout_redirect_uri: 'http://localhost:4200',
    response_type: 'id_token token',
    scope: 'openid profile email',
    silent_redirect_uri: 'http://localhost:4200/silent_renew.html',
    automaticSilentRenew: true,
    // silentRequestTimeout:10000,
    filterProtocolClaims: true,
    loadUserInfo: true
};
