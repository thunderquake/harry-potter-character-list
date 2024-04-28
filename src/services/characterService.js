import axios from "axios";

class characterService {
  constructor(baseURL = "https://api.potterdb.com/v1") {
    this.baseUrl = baseURL;
    this.instance = axios.create({ baseURL: this.baseUrl });
  }

  async getCharacters(pageSize, pageNumber) {
    try {
      const response = await this.instance.get("/characters", {
        params: {
          "page[size]": pageSize,
          "page[number]": pageNumber,
        },
      });
      return response.data.data;
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
