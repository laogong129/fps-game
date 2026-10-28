# Third-party game assets

## Railway weapon models

The three active weapon models use geometry by **Quaternius**, from the **Ultimate Guns Pack** (July 2019). The pack's creator page and the creator's OpenGameArt release both identify this release as **CC0 1.0 Universal**. Sources checked and downloaded on 2026-10-28.

- Creator: https://quaternius.com/packs/ultimategun.html
- Creator's release: https://opengameart.org/content/low-poly-guns-pack
- Downloaded archive: https://opengameart.org/sites/default/files/ultimate_gun_pack_by_quaternius.zip
- License: https://creativecommons.org/publicdomain/zero/1.0/
- Local license copy: `public/assets/models/weapons/CC0-1.0.txt`
- Archive SHA-256: `6bbae4cd42a520bd2ed95881394293e90804a63abdaf121e3b55fa08b7311737`
- Archive size: 7,375,704 bytes.

| Game weapon | Original OBJ/MTL | Local GLB |
|---|---|---|
| Pistol | `Pistol_2` | `public/assets/models/weapons/railway-pistol.glb` |
| Pump shotgun | `Shotgun_2` | `public/assets/models/weapons/railway-pump-shotgun.glb` |
| Carbine | `AssaultRifle2_4` | `public/assets/models/weapons/railway-carbine.glb` |

Project adaptations: convert OBJ/MTL to self-contained GLB, orient barrels along negative Z, preserve the original low-poly geometry, apply a shared muted steel/charcoal/walnut material palette, and add a `Muzzle` attachment at the source barrel tip. The models have no remote dependencies or external textures. These adaptations do not change the source asset license. Attribution is voluntary under CC0; it is retained here for provenance.

`tools/import-weapon-pack.mjs` reproduces the conversion from the SHA-256-checked archive extracted under `.cache/weapon-assets/`. The source archive and pack preview remain in ignored local cache rather than the deployed game. The license text is copied from the SPDX license-list-data project's `CC0-1.0.txt` representation of the CC0 legal code.

## Older bundled models

The pre-existing `pistol.glb`, `shotgun.glb`, `rifle.glb`, `sniper.glb`, and enemy model were present before this change. Their original provenance has not been established by the current asset import. The three older gun files are no longer selected by `CONFIG.gunModel`; this entry does not claim a new license for them.
