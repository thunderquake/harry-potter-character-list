import axios from "axios";
import buildQueryString from "../helpers/buildQueryString";

class characterService {
  constructor(baseURL = "https://api.potterdb.com/v1") {
    this.baseUrl = baseURL;
    this.instance = axios.create({ baseURL: this.baseUrl });
  }

  async getCharacters(params) {
    try {
      const queryString = buildQueryString(params);
      const response = await this.instance.get(`/characters?${queryString}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch characters");
    }
  }

  async getCharacterByID(id) {
    try {
      const response = await this.instance.get(`/characters/${id}`);
      return response.data.data;
    } catch (error) {
      throw new Error("Failed to fetch character");
    }
  }
}

export default new characterService();
