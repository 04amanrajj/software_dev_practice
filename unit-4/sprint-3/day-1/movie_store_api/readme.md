# Movie Store API

This project is a RESTful API for managing a Movie Store, built using **Express** and **Mongoose**. It supports full CRUD operations and provides various GET query options to retrieve, filter, search, sort, and paginate movies.

## Features

- **CRUD Operations**: Support for Create, Read, Update, and Delete on movies.
- **Filtering**: Retrieve movies by specific fields, such as `title` and `rating`.
- **Search**: Search movies by name using a query parameter. For example, `/movies?q=dho` will return movies with "Dho" in their title (e.g., _Dhoom_, _Dhoni: Untold Story_).
- **Sorting**: Sort movies by any field using a `sortBy` query parameter.
- **Pagination**: Use `page` and `limit` query parameters to paginate results, limiting the number of movies returned per request.

## Installation

1. **Clone the Folder**:

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Configure Database**:
   Ensure you have MongoDB installed and running. You may update the database URI in your configuration file if necessary.

4. **Run the Server**:

   ```bash
   npm start
   ```

5. **Access the API**:
   By default, the server will run on `http://localhost:3000`.

## Endpoints

### 1. **POST** `/movies/addmovie`

- **Description**: Add a new movie.
- **Body**: JSON object containing movie details like `title`, `language`, `year`, `rating`, etc.
- **Response**: Success message and status code `200`.

### 2. **GET** `/movies`

- **Description**: Retrieve a list of movies with optional filtering, sorting, and pagination.
- **Query Parameters**:

  - `title`: Filter by movie title.
  - `rating`: Filter by movie rating.
  - `q`: Search movies by title. For example, `q=dho` returns movies with "Dho" in their title.
  - `sortby`: Field to sort results by (e.g., `title`, `rating`, etc.).
  - `order`: Order of sorting, either `asc` or `desc`. Default is `asc`.
  - `page`: Page number for pagination.
  - `limit`: Number of movies to return per page.

- **Example Requests**:
  - Retrieve movies with "dho" in the title:
    ```
    GET /movies?q=dho
    ```
  - Sort movies by rating in descending order:
    ```
    GET /movies?sortBy=rating&order=desc
    ```
  - Paginate results to show the second page with 5 movies per page:
    ```
    GET /movies?page=2&limit=5
    ```

### 3. **PATCH** `/movies/:title`

- **Description**: Update a movie by its title.
- **URL Parameter**: `title` - The title of the movie to update.
- **Body**: JSON object with the fields to update.
- **Response**: Updated movie data.

### 4. **DELETE** `/movies/:title`

- **Description**: Delete a movie by its title.
- **URL Parameter**: `title` - The title of the movie to delete.
- **Response**: Success message with status code `200`.

## Example Data Structure

Movies are stored in MongoDB with the following structure:

```json
{
  "_id": "671f79f73a3d1f162d658a47",
  "title": "Batman",
  "language": "English",
  "rating": 9,
  "year": 2008,
  "__v": 0
}
```

## Error Handling

All endpoints return error messages with appropriate status codes:

- `400`: Bad Request for malformed requests or validation errors.
- `404`: Not Found if a movie title does not exist.
- `500`: Internal Server Error for unexpected issues.

---

## Technologies Used

- **Express.js**: For building the server and handling HTTP requests.
- **Mongoose**: For MongoDB object modeling and data manipulation.
- **MongoDB**: As the database for storing movies.
- **Winston**: For structured and customizable logging of server activity and errors.