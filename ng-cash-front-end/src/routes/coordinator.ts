export const GO_T0_SIGNUP = ( navigate: ( navigate: string ) => void ) => navigate( '/cadastro' )
export const GO_T0_LOGIN = ( navigate: ( navigate: string ) => void ) => {

    window.localStorage.removeItem( 'token' )
    navigate( '/login' )

}
export const GO_TO_HOMEPAGE = ( navigate: ( navigate: string ) => void ) => navigate( '/conta' )

