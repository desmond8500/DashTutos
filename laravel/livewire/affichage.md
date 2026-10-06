# [Affichage](readme.md)

## wire:loading

```html
<button class="btn btn-primary">
    <span  class="spinner-border"></span>
</button> 
```

## wire:target

```html
<input type="file" id="file" class="form-control" accept="image/*" multiple wire:model="images">
<button class="btn btn-primary" wire:click="store_files" wire:loading.remove wire:target='images'>
    <i class="ti ti-photo-plus"></i> 
</button> 
```

## wire:loading.remove

```html
<div class="input-group">
    <input type="file" id="file" class="form-control" accept="image/*" multiple wire:model="images">

    <button class="btn btn-primary" wire:click="store_files" wire:loading.remove wire:target='images'>
        <i class="ti ti-photo-plus"></i> 
    </button> 
    
    <button class="btn btn-primary" wire:click="store_files" wire:loading wire:target='images'>
        <span  class="spinner-border"></span>
    </button> 
</div>
```
