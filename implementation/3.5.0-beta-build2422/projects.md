<!-- Generated from facts.json by tools/implementation.mjs; edit facts.json. -->
# Projects, saving and recovery

Source snapshot: **3.5.0 beta, source build 2422**. Static implementation review on 2026-10-22. Runtime verification: **not performed**. Product-owner review: **pending**. Applicability to released 3.4: **not established**.

[Evidence and use rules](README.md) · [All topics](README.md#topics)

## CODE-PROJECT-001

**What project serialization includes**

AppHost::currentStateConfig creates the AppHost XML root, saves the node graph when Root exists, then asks PanelLayoutManager and SBStateServer to save their state. Version and BuildNumber are root attributes. An initialized SBStateServer writes its JSON configuration inside an SBState CDATA element.

Scope: This describes serialization. It does not prove that a particular disk write succeeded or that the project contains every external media dependency.

Source evidence (original source is not bundled):

- `Server/AppHost/AppHost.cpp`, lines 476–488; SHA-256 `e58082e98da641067595de98b037f09981b6e4fc0ccce6e671958281b064322d`.
- `Server/AppHost/AppHost.cpp`, lines 850–861; SHA-256 `e58082e98da641067595de98b037f09981b6e4fc0ccce6e671958281b064322d`.
- `Libs/SBState/SBStateServer.cpp`, lines 67–74; SHA-256 `4d46cfa223c17938693a5fcf1a910a9455e3dba17ded321fc0761003d4a115bf`.

## CODE-PROJECT-002

**Autosave, shutdown saving and Revert Changes**

Periodic autosave returns immediately for period_never; otherwise an elapsed autosave period calls saveConfig. Shutdown saving uses saveOnNextFinish: forced save returns true, forced not_save returns false, and auto_save uses the supplied Save Server on Close preference. Revert Changes sets Force Open Last Project, selects not_save for the next shutdown and requests a server restart.

Scope: These are separate control paths. This record does not establish the preferences in an existing project or guarantee a successful save.

Source evidence (original source is not bundled):

- `Server/AppHost/AppHost.cpp`, lines 319–349; SHA-256 `e58082e98da641067595de98b037f09981b6e4fc0ccce6e671958281b064322d`.
- `Server/ProjectHandler/ProjectHandler.cpp`, lines 244–254; SHA-256 `672247386fe7b7b5acf32d7f9f7a1c8812039b9d82ff1dcfbcde26a4a3926bf9`.
- `Server/AppHost/AppHost.cpp`, lines 937–942; SHA-256 `e58082e98da641067595de98b037f09981b6e4fc0ccce6e671958281b064322d`.

## CODE-PROJECT-003

**Project write and backup sequence**

Project::saveProject rejects XML without a root, attempts to create a project-folder .lock and retries failed configuration writes until its timer exceeds 500 ms. After a successful write it removes the lock, attempts a backup copy and runs backup archiving. CONFIG_BACKUPS is 10; archiveBackups attempts to move entries beyond that count into the archive. Archive cleanup compares its size against maxBackupsSizeMb and removes eligible files in modification-time order.

Scope: File-system operations can fail. Ten is the retention target in this implementation, not a guarantee that ten usable backups exist. A backup-copy error is logged separately from the successful primary write.

Source evidence (original source is not bundled):

- `Libs/SBCore/Project.cpp`, lines 12–14; SHA-256 `7c979359ff7eff725f88c610764c4c928c2d8beed319ec6453f0e602f447e5d5`.
- `Libs/SBCore/Project.cpp`, lines 245–273; SHA-256 `7c979359ff7eff725f88c610764c4c928c2d8beed319ec6453f0e602f447e5d5`.
- `Libs/SBCore/Project.cpp`, lines 109–133; SHA-256 `7c979359ff7eff725f88c610764c4c928c2d8beed319ec6453f0e602f447e5d5`.
- `Libs/SBCore/Project.cpp`, lines 147–186; SHA-256 `7c979359ff7eff725f88c610764c4c928c2d8beed319ec6453f0e602f447e5d5`.
- `Libs/SBCore/Project.cpp`, lines 341–358; SHA-256 `7c979359ff7eff725f88c610764c4c928c2d8beed319ec6453f0e602f447e5d5`.

## CODE-PROJECT-004

**Configuration recovery from backups**

If loadProjectData fails, Project::init attempts initFromBackup. Configuration checks reject an invalid path, missing file, directory, remaining .lock or zero-length file. Failed validation or XML loading attempts to rename the configuration with a _corrupted suffix. Recovery iterates the sorted backup list in reverse, copies a candidate to the project configuration path and tries to load it. AppHost adds an informational message when recovery reports a backup name.

Scope: This path restores a configuration file. It does not copy missing external media, and it can fail when no candidate can be copied and loaded.

Source evidence (original source is not bundled):

- `Libs/SBCore/Project.cpp`, lines 19–55; SHA-256 `7c979359ff7eff725f88c610764c4c928c2d8beed319ec6453f0e602f447e5d5`.
- `Libs/SBCore/Project.cpp`, lines 76–106; SHA-256 `7c979359ff7eff725f88c610764c4c928c2d8beed319ec6453f0e602f447e5d5`.
- `Libs/SBCore/Project.cpp`, lines 184–195; SHA-256 `7c979359ff7eff725f88c610764c4c928c2d8beed319ec6453f0e602f447e5d5`.
- `Libs/SBCore/Project.cpp`, lines 307–333; SHA-256 `7c979359ff7eff725f88c610764c4c928c2d8beed319ec6453f0e602f447e5d5`.
- `Server/AppHost/AppHost.cpp`, lines 489–508; SHA-256 `e58082e98da641067595de98b037f09981b6e4fc0ccce6e671958281b064322d`.

## CODE-PROJECT-005

**Save As copies two resource directories**

AppHost::saveAsProject calls saveConfig with the chosen project path, checks that the path exists, adds it to recent projects and changes the current configuration path. If the project folder changes, it calls copyFolderToProject for Resources and for the directory returned by Root::nodesResourcesFolder.

Scope: The inspected function does not enumerate all external media dependencies. Its existence check is not an independent verification of the newly written contents.

Source evidence (original source is not bundled):

- `Server/AppHost/AppHost.cpp`, lines 863–896; SHA-256 `e58082e98da641067595de98b037f09981b6e4fc0ccce6e671958281b064322d`.
- `Server/AppHost/AppHost.h`, lines 177–177; SHA-256 `c7bbd45e6df3f72593f6416981d307edb90819e26a292625f3b90836dfe2c96d`.
