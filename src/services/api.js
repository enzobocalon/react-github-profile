import { useState } from "react";

const API_URL = 'https://api.github.com'

const searchProfile = async (id) => {
    const response = await fetch(`${API_URL}/users/${id}`);
    const data = await response.json();

    return data
}

export default searchProfile
