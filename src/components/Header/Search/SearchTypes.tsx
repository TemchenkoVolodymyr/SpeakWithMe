

export type socialNetworkType = {
    instagram:string | null,
    portfolio:string | null,
    telegram:string | null,
    twitter:string | null,
    youtube:string | null
}

export type foundUserType = {
        aboutMe: string | null
        email:string,
        lookForJob:boolean,
        name:string,
        password:string,
        photo:string | null,
        socialNetwork: socialNetworkType | null,
        status:string | null,
        _id:string
    }



  export type propsSearchType = {
    setSearch:  (e : string) => void,
    search:string | null,
    foundUsers:Array<foundUserType>  | null
}