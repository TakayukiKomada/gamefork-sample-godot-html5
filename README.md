# Godot HTML5 Sample

Minimal Godot-shaped HTML5 sample for GameFork.

This repository is intentionally small. It mimics the file layout and manifest
shape of a Godot 4.3+ HTML5 single-thread export so GameFork can validate:

- `format: "godot"` manifest handling
- `engine: "godot"` / `engine_version` / `web_threads: false`
- Node Runtime fallback instead of iframe browser play
- `.wasm` MIME and optional export sidecar serving

It is not a full Godot editor export produced by the Godot editor. A real
editor export can replace this fixture later without changing the GameFork
manifest shape.

## GameFork

- Format: `godot`
- Entry: `index.html`
- Recommended tags: `sample`, `godot`, `runtime`
