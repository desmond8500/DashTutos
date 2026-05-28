# [Json Server](readme)

## Description

### Installation

```console
npm install json-server
```

### Utilisation

Créer un fichier `db.json`

```json
{
  "posts": [
    { "id": "1", "title": "a title", "views": 100 },
    { "id": "2", "title": "another title", "views": 200 }
  ],
  "comments": [
    { "id": "1", "text": "a comment about post 1", "postId": "1" },
    { "id": "2", "text": "another comment about post 1", "postId": "1" }
  ],
  "profile": {
    "name": "typicode"
  }
}
```

Lancer le serveur

```console
npx json-server db.json --watch
```

## Requettes

```console
GET /posts?views:gt=100                  # Filter by condition
GET /posts?_sort=-views                  # Sort by field (descending)
GET /posts?_page=1&_per_page=10          # Pagination
GET /posts?_embed=comments               # Include relations
GET /posts?_where={"or":[...]}           # Complex queries
```

## Parametres de requettes

```console
GET /posts?views:gt=100
GET /posts?title:eq=Hello
GET /posts?id:in=1,2,3
GET /posts?author.name:eq=typicode
GET /posts?title:contains=hello
GET /posts?title:startsWith=Hello
GET /posts?title:endsWith=world
```

## Tri 

```console
GET /posts?_sort=title
GET /posts?_sort=-views
GET /posts?_sort=author.name,-views
```

## Pagination

```console
GET /posts?_page=1&_per_page=25
```

## Relations

```console
GET /posts?_embed=comments
GET /comments?_embed=post
```

## Filtre complexe

```console
GET /posts?_where={"or":[{"views":{"gt":100}},{"author":{"name":{"lt":"m"}}}]}
```

## Routes

```html
GET    /posts
GET    /posts/:id
POST   /posts
PUT    /posts/:id
PATCH  /posts/:id
DELETE /posts/:id
```

## Fichiers statiques

JSON Server automatically serves files from the ./public directory.

```console
json-server db.json -s ./static
json-server db.json -s ./static -s ./node_modules
```

## Sources

* [NPM](https://www.npmjs.com/package/json-server)