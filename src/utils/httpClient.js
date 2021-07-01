const URL = "https://api.themoviedb.org/3/"
// const leng = "?language=es"
export function get (path) {
    return fetch(URL + path /*+ leng*/, {
      headers: {
        Authorization: 
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDEyYjdkOWQ1NmE3NDM5MjdjNGZhMDg2NWYyZmE2MCIsInN1YiI6IjYwZGI1ODhiMTdjNDQzMDA0NjE0ZjI5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rwmIcyjsCfWLo3aRTXDIGJyCtEFYWE_Ovv6XCvs-qX4",
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((result) => result.json())
}