const BASE_URL = 'mongodb+srv://vavisoftware:wXycrlVp1vPRX3mp@cluster0.t3bk6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Backend API adresinizi buraya yazın.

export const fetchCards = async () => {
    const response = await fetch(`${BASE_URL}/cards`);
    if (!response.ok) throw new Error('Kartlar alınamadı');
    return response.json();
};

export const addCardToDB = async (cardData: { title: string; description: string; image: string }) => {
    const response = await fetch(`${BASE_URL}/cards`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cardData),
    });
    if (!response.ok) throw new Error('Kart eklenemedi');
    return response.json();
};
