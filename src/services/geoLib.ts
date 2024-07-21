import axios from 'axios';
class GeoLib {
  private static NOMINATIM_REVERSE_API_URL = 'https://nominatim.openstreetmap.org/reverse';
  private static NOMINATIM_SEARCH_API_URL = 'https://nominatim.openstreetmap.org/search';

  public async getAddressFromCoordinates(coordinates: { lat: number; lng: number }): Promise<string> {
    const response = await axios.get(GeoLib.NOMINATIM_REVERSE_API_URL, {
      params: {
        lat: coordinates.lat,
        lon: coordinates.lng,
        format: 'json'
      }
    });

    if (response.status !== 200) {
      throw new Error('Invalid Geocoding API response!');
    }

    if (!response.data.address) {
      throw new Error('No address was found with the given coordinates!');
    }

    return response.data.display_name;
  }

  public async getCoordinatesFromAddress(address: string): Promise<{ lat: number; lng: number }> {
    const response = await axios.get(GeoLib.NOMINATIM_SEARCH_API_URL, {
      params: {
        q: address,
        format: 'json',
        addressdetails: 1,
        limit: 1
      }
    });

    if (response.status !== 200) {
      throw new Error('Invalid Geocoding API response!');
    }

    if (!response.data.length) {
      throw new Error('No coordinates were found with the given address!');
    }

    return {
      lat: parseFloat(response.data[0].lat),
      lng: parseFloat(response.data[0].lon)
    };
  }
}

export default new GeoLib();
