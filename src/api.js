export const fetchTopRated = async (type, pageNumber) => {
    try {
        const resp = await fetch(
            `https://api.themoviedb.org/3/${type}/top_rated?include_adult=false&api_key=${apiKey}&page=${pageNumber}`
        );
        const data = await resp.json();
        return data;
    } catch (error) {
        console.error(`Error fetching top-rated movies: ${error.message}`);
        throw error;
    }
};
export const fetchTrending = async (type, timeLine, pageNumber) => {
    try {
        const resp = await fetch(
            `https://api.themoviedb.org/3/trending/${type}/${timeLine}?api_key=${apiKey}&page=${pageNumber}`
        );
        const data = await resp.json();
        return data;
    } catch (error) {
        console.error(`Error fetching top-rated movies: ${error.message}`);
        throw error;
    }
};
export const searchMovie = async (movieName, pageNumber) => {
    try {
        const resp = await fetch(
            `https://api.themoviedb.org/3/search/multi?query=${movieName}&include_adult=false&language=en-US&page=${pageNumber}&api_key=${apiKey}`
        );
        const data = await resp.json();
        return data;
    } catch (error) {
        console.error(`Error fetching top-rated movies: ${error.message}`);
        throw error;
    }
};






// Change Date Format
export function formatDate(inputDate) {
    const months = [
        "Jan", "Feb", "Mar", "Apr",
        "May", "Jun", "Jul", "Aug",
        "Sep", "Oct", "Nov", "Dec"
    ];

    const dateParts = inputDate.split("-");
    const year = dateParts[0];
    const monthIndex = parseInt(dateParts[1], 10) - 1;
    const day = parseInt(dateParts[2], 10);

    // Function to get the ordinal suffix for the day (e.g., "th", "st", "nd", "rd")
    const getOrdinalSuffix = function (day) {
        if (day >= 11 && day <= 13) {
            return "th";
        }
        const lastDigit = day % 10;
        switch (lastDigit) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    };

    const daySuffix = getOrdinalSuffix(day);

    // Format the date
    const formattedDate = `${day}${daySuffix} ${months[monthIndex]} ${year}`;

    return formattedDate;
}