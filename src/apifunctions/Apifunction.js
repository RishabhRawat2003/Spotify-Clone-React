import keys from "../apiKeys/Api";


export class ApiService {
    getToken = async () => {

        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(keys.clientId + ':' + keys.clientSecret)
            },
            body: 'grant_type=client_credentials'
        });

        const data = await result.json();
        return data.access_token;
    }

    getGenres = async (token) => {

        const result = await fetch(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token }
        });

        const data = await result.json();
        return data.categories.items;
    }

    getPlaylistByGenre = async (token, genreId) => {

        const limit = 42;

        const result = await fetch(`https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`, {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token }
        });

        const data = await result.json();
        return data;
    }

    getTracks = async (token, tracksEndPoint) => {

        const limit = 42;

        const result = await fetch(`${tracksEndPoint}?limit=${limit}`, {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token }
        });

        const data = await result.json();
        return data.items;
    }

    getTrack = async (token, trackEndPoint) => {

        const result = await fetch(`${trackEndPoint}`, {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token }
        });

        const data = await result.json();
        return data;
    }

    getArtists = async (token) => {

        const result = await fetch("https://api.spotify.com/v1/artists?ids=7hVmdlsJp0E2WQIvVl8ngN,3TVXtAsR1Inumwj472S9r4,4PULA4EFzYTrxYvOVlwpiQ,5C1S9XwxMuuCciutwMhp5t,3yOHCFUZRsaHUu1yefR8ck,0CP2yDO5i5Q2G1fRj6C8JV,0yniDkE5y7ci4X9OtLBXaQ,3uHUKCspaCzAab9A3LlGAr,6DARBhWbfcS9E4yJzcliqQ,2FKWNmZWDBZR4dE5KX4plR,15UsOTVnJzReFVN1VCnxy4,4MCBfE4596Uoi2O4DtmEMz,4YRxDV8wJFPHPTeXepOstw,5RnjdaS0Pqb4KgWvCoohs8,2rN8LHqK4TBI7y3d9POvJb,4ITkqBlf5eoVCOFwsJCnqo", {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token }
        });

        const data = await result.json();
        return data;
    }

    getArtistsTracks = async (token, trackEndPoint) => {

        const result = await fetch(`https://api.spotify.com/v1/artists/${trackEndPoint}/top-tracks?market=IN`, {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token }
        });

        const data = await result.json();
        return data;
    }

    getPlaylists = async (token) => {

        const result = await fetch(`https://api.spotify.com/v1/browse/categories/romance/playlists?limit=20`, {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token }
        });

        const data = await result.json();
        return data;
    }
    
    getNavArtists = async (token) => {

        const result = await fetch("https://api.spotify.com/v1/artists?ids=2P9JaCtpbQSuZOgvtPrUJ8,2GoeZ0qOTt6kjsWW4eA6LS,1tqysapcCh1lWEAc9dIFpa,0oOet2f43PA68X5RxKobEy,7uIbLdzzSEqnX0Pkrb56cR,56SjZARoEvag3RoKWIb16j,4fEkbug6kZzzJ8eYX6Kbbp,0y59o4v8uw5crbN9M3JiL1,3fWcIRZlzhMl2YNACMvHui,76fuWYgIf3TVIopTs3vaJ6,7GgAwYJnBBFT1WogNWf0oj,36iDrP3UnCxsSH9LuSdkDj,0SWOtgI95g7oVrP9halrmP,61P6g4b3TgZ9m2caJlXS4K,24BYRlsS8uIO4jA71mJ4Js,07hzX8SH6CEg7B2yl4hoKs,4gdMJYnopf2nEUcanAwstx,5UdFr0GeO7jKIaNIJgwB36", {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token }
        });

        const data = await result.json();
        return data;
    }
}

const apiFunc = new ApiService()

export default apiFunc