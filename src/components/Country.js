import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import "../country.css"

const Country = () => {
  const [country, setCountry] = useState([])
  const { name } = useParams()

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(
        `https://restcountries.com/v3/name/${name}`
      )
      const country = await response.json()
      setCountry(country)
    }

    fetchCountryData()
  }, [name])

  return (
    <>
      <section className="country">
        <Link to="/" className="btn btn-light">
          <i className="fas fa-arrow-left"></i> Back Home
        </Link>
        {console.log(country)}
        {
          // country?.length == 0 ? 
          country?.map((c) => {

            const flag = c.flags?.[0]
            const name = c.name.common
            const region = c.region
            const subregion = c.subregion
            const capital = c.capital?.[0]
            const topLevelDomain = c.tld?.[0]
            const borders = c.borders
            
            return (
              <article key={name}>
                <div className="country-inner">
                  <div className="flag">
                    <img src={flag} alt={name} />
                  </div>

                  <div className="country-details">
                    <div>
                      <h2>{name}</h2>
                      <h5>
                        Region: <span>{region}</span>
                      </h5>
                      <h5>
                        Sub Region: <span>{subregion}</span>
                      </h5>
                      <h5>
                        Capital: <span>{capital}</span>{" "}
                      </h5>
                    </div>

                    <div>
                      <h5>
                        Top Level Domain: <span>{topLevelDomain}</span>
                      </h5>
                    </div>
                  </div>
                </div>

                <div>
                  <h3>Border Countries: </h3>
                  <div>
                    {borders?.map((border) => {
                      return (
                        <ul key={border}>
                          <li>{border}</li>
                        </ul>
                      )
                    })}
                  </div>
                </div>
              </article>
            )
          })
          //  : 
          // null
         }
      </section>
    </>
  )
}

export default Country
