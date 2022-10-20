const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api` || "https://radiant-mesa-38574.herokuapp.com/api";


class ApiClient {

    async getArticles() {
        const url = `${API_URL}/articles?populate=*`;
        try {
            const response = await fetch(url)
            const { data } = await response.json()
            return data;
        } catch (error) {
            return error;
        }
    }
    async getArticlesBySlug(slug) {
        const url = `${API_URL}/articles?populate=*&filters[slug][$eq]=${slug}`;
        try {
            const response = await fetch(url)
            const { data } = await response.json()
            return data;
        } catch (error) {
            return error;
        }
    }
    async getArticleById(id) {
        const url = `${API_URL}/articles/${id}`;
        try {
            const response = await fetch(url)
            const { data } = await response.json()
            return data;
        } catch (error) {
            return error;
        }
    }

    async getCategories() {
        const url = `${API_URL}/categories`;
        try {
            const response = await fetch(url)
            const { data } = await response.json()
            return data;
        } catch (error) {
            return error;
        }
    }

    async getArticlesByCategory(categoryName) {

        const url = `${API_URL}/articles?populate=categories&filters[categories][slug][$eq]=${categoryName}`;
        try {
            const response = await fetch(url)
            const { data } = await response.json()
            return data;
        } catch (error) {
            return error;
        }
    }


}

export default new ApiClient();