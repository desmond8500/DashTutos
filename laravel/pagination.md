# [Pagination](readme.md)

## Version API


::: code-group

```php [Swagger]
/**
     * @OA\Get(
     *      path="/api/v1/items",
     *      tags={"Articles"},
     *      description="Liste des articles",
     *       @OA\Parameter(
     *          description="Recherche par nom ou référence",
     *          in="path",
     *          name="search",
     *          required=false,
     *          @OA\Schema(type="string"),
     *          @OA\Examples(example="string", value="test", summary="a string value"),
     *      ),
     *      @OA\Parameter(
     *          description="Page de pagination",
     *          in="path",
     *          name="page",
     *          required=false,
     *          @OA\Schema(type="string"),
     *          @OA\Examples(example="string", value="test", summary="a string value"),
     *      ),
     *      @OA\Parameter(
     *          description="Nombre d'éléments par page",
     *          in="path",
     *          name="per_page",
     *          required=false,
     *          @OA\Schema(type="string"),
     *          @OA\Examples(example="string", value="test", summary="a string value"),
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Success",
     *       ),
     *     )
     */
```

Pagination avec des recherches

```php [controlleur.php]
function index(Request $request){
    $perPage = min($request->get('per_page', 10), 100);

    if ($request->search) {
        $articles = Article::where('designation', 'like', '%' . $request->search . '%')
        ->orWhere('reference', 'like', '%' . $request->search . '%')
        ->paginate($perPage);
    } else {
        $articles = Article::paginate($perPage);
    }

    $articles = ArticleResource::collection($articles);

    return ResponseController::response(true, "Les articles ont été récupérés",$articles, [
        'current_page' => $articles->currentPage(),
        'last_page' => $articles->lastPage(),
        'per_page' => $articles->perPage(),
        'total' => $articles->total(),
    ]);
}
```

```code [controlleur.php]
GET /api/items?page=2
GET /api/items?per_page=20
GET /api/items?search='vélo'
```

:::

 
