# Open-IP

The **easy-peasy** way for geolocation lookup for an IP Address.

💃💃💃

Example - https://open-ip.herokuapp.com/157.37.165.132

## Syntax

There is no syntax 😎.
Just add your *IP Address* as the param - https://open-ip.herokuapp.com/:ip

## Response

```json
{
  "range": [
    2636488704, // <low bound of IP block>
    2636490751 // <high bound of IP block>
  ],
  "country": "IN", // 2 letter ISO-3166-1 country code
  "region": "RJ", // Up to 3 alphanumeric variable length characters as ISO 3166-2 code
  "eu": "0", // 1 if the country is a member state of the European Union, 0 otherwise.
  "timezone": "Asia/Kolkata", // Timezone from IANA Time Zone Database
  "city": "Jaipur", // full city name
  "ll": [
    26.9196, // latitude
    75.7878 // longitude
  ],
  "metro": 0, // Metro code
  "area": 200 // The approximate accuracy radius (km), around the latitude and longitude
  }
```

## And

This is the end of this README just like the repository. ⏏
