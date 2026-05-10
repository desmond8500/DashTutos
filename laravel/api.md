# [API](readme.md)

## Description

Procédures pour mettre en place une application REST.

- [Installation](base/installation.md)
- [Sanctum](sanctum.md)

## Controlleur

```bash
php artisan make:controller PostController --api
```

## Route

```bash
Route::apiResource('posts', PostController::class);
```

## Tester une API

Vous pouvez tester votre API avec des outils comme Postman, cURL, ou directement dans le navigateur.

| Action | champ | Chemin |
| :-- | :-- | :-- |
| Récupérer tous les éléments | GET | /api/posts |
| Créer un élément | POST | /api/posts |
| Récupérer un elements | GET | /api/posts/{id} |
| Modifier  | PUT/PATCH | /api/posts/{id} |
| Supprimer | DELETE | /api/posts/{id} |

## Response

```php
/**
     * Reponse API
     *
     * @param boolean $success Description
     * @param string $message Message
     * @param array $data Donnnnées à retourner
     * @return type
     * @throws conditon
     **/
    public static function response($success, $message, $data = null, $code = null)
    {
        if ($success) {
            $response = [
                'success' => $success,
                'message' => $message,
                'data' => $data,
            ];
        } else {
            $response = [
                'success' => $success,
                'message' => $message,
                'error' => $data,
            ];
        }

        if (!$code) {
            if ($success) {
                $code = 200;
            } else {
                $code = 400;
            }
        }

        return response()->json($response, $code);
    }

```

## Validation

```php
static function validation($request, $validate, $message = "Error")
    {
        try {
            $request->validate($validate);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => $message,
                'errors' => $e->errors(),
            ], 422);
        }
    }

```

### Utilisation

```php
    $validated = ResponseController::validation($request,
        [
            'email'=> 'required',
        ]
    )
    if($validated){
        return $validated;
    }

```

## Methodes

```php
/**
*      @OA\Get(
*      path="/api/v1/tasks",
*      tags={"Taches"},
*      summary="Liste des taches",
*      @OA\Response(
*          response=200,
*          description="Les taches ont été récupérés avec succès",
*       ),
*     )
*/
function index(Request $request){
    $perPage = min($request->get('per_page', 10), 100);

    if ($request->search) {
        $tasks = Task::where('name', 'like', '%' . $request->search . '%')
            ->orWhere('description', 'like', '%' . $request->search . '%')
            ->paginate($perPage);
    } else {
        $tasks = Task::paginate($perPage);
    }
    return ResponseController::response(true, 'Les taches ont été récupérés avec succès', $tasks, [
        'current_page' => $tasks->currentPage(),
        'last_page' => $tasks->lastPage(),
        'per_page' => $tasks->perPage(),
        'total' => $tasks->total(),
    ]);
}

/**
*      @OA\Post(
*      path="/api/v1/clients",
*      tags={"Clients",},
*      summary="Ajouter un client",
*      @OA\RequestBody(
*          required=true,
*          @OA\JsonContent(
*              required={"name",},
*              @OA\Property(property="client_id", type="integer", example="1"),
*              @OA\Property(property="projet_id", type="integer", example="1"),
*              @OA\Property(property="devis_id", type="integer", example="1"),
*              @OA\Property(property="building_id", type="integer", example="1"),
*              @OA\Property(property="stage_id", type="integer", example="1"),
*              @OA\Property(property="room_id", type="integer", example="1"),
*              @OA\Property(property="journal_id", type="integer", example="1"),
*
*              @OA\Property(property="name", type="string", example=""),
*              @OA\Property(property="description", type="string", example=""),
*
*              @OA\Property(property="priority_id", type="string", example=""),
*              @OA\Property(property="statut_id", type="string", example=""),
*
*              @OA\Property(property="expiration_date", type="string", example="1"),
*              @OA\Property(property="start_date", type="string", example="1"),
*              @OA\Property(property="end_date", type="string", example="1"),
*              @OA\Property(property="favoris", type="boolean", example="1"),
*          )
*      ),
*      @OA\Response(
*          response=201,
*          description="Client créé avec succès",
*       ),
*      @OA\Response(
*          response=400,
*          description="Erreur lors de la création du client",
*       ),
*     )
*/
function store(Request $request){
    $task = new Task();
    $task->name = $request->name;
    $task->description = $request->description;
    $task->address = $request->address;
    // $task->avatar = $request->avatar;
    $task->status = $request->status;
    $task->type = $request->type;
    $task->favorite = $request->favorite;

    if ($task->save()) {
        return ResponseController::response(true, 'Tache créée avec succès', null, 201);
    } else {
        return ResponseController::response(false, 'Erreur lors de la création de la tache', null, 400);
    }
}

function show($id){
    $task = Task::find($id);
    if ($task) {
        return ResponseController::response(true, 'La tache a été récupéré avec succès', $task);
    } else {
        return ResponseController::response(false, 'Tache non trouvée', null, 404);
    }
}
/**
*      @OA\Put(
*      path="/api/v1/clients/{id}",
*      tags={"Clients",},
*      summary="Mettre à jour un client",
*      @OA\Parameter(
*          name="id",
*          in="path",
*          required=true,
*          description="ID du client",
*          @OA\Schema(
*              type="integer"
*          )
*      ),
*      @OA\RequestBody(
*          required=true,
*          @OA\JsonContent(
*              required={"name",},
*              @OA\Property(property="name", type="string", example="Client Name"),
*              @OA\Property(property="description", type="string", example=""),
*              @OA\Property(property="avatar", type="string", example=""),
*              @OA\Property(property="status", type="integer", example="1"),
*              @OA\Property(property="type", type="1", example="1"),
*              @OA\Property(property="favorite", type="string", example="1"),
*          )
*      ),
*      @OA\Response(
*          response=200,
*          description="Client mis à jour avec succès",
*       ),
*      @OA\Response(
*          response=404,
*          description="Client non trouvé",
*       ),
*      @OA\Response(
*          response=400,
*          description="Erreur lors de la mise à jour du client",
*       ),
*     )
*/
function update(Request $request, $id){

}

/**
*      @OA\Delete(
*      path="/api/v1/clients/{id}",
*      tags={"Clients",},
*      summary="Supprimer un client",
*      @OA\Parameter(
*          name="id",
*          in="path",
*          required=true,
*          description="ID du client",
*          @OA\Schema(
*              type="integer"
*          )
*      ),
*      @OA\Response(
*          response=200,
*          description="Client supprimé avec succès",
*       ),
*      @OA\Response(
*          response=404,
*          description="Client non trouvé",
*       ),
*      @OA\Response(
*          response=400,
*          description="Erreur lors de la suppression du client",
*       ),
*     )
*/
function destroy($id){
    $task = Task::find($id);
    if ($task) {
        if ($task->delete()) {
            return ResponseController::response(true, 'Client supprimé avec succès', null, 200);
        } else {
            return ResponseController::response(false, 'Erreur lors de la suppression du client', null, 400);
        }
    } else {
        return ResponseController::response(false, 'Client non trouvé', null, 404);
    }
}
```