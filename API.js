/**
 * GTA Network API dummy object
 * You can use this file to hint a js autocompletion tools like Ternjs about the GTA:N lib
 * The function descriptions are taken from the GTA:N
 *
 * This file is released under the conditions of the MIT license
 *
 * @author Draex (https://forum.gtanet.work/index.php?members/draex.4963/)
 */

class Vector3 {
  /**
   * A vector containing 3 values.
   * @param {float} x
   * @param {float} y
   * @param {float} z
   */
  constructor(x, y, z) {
    this.X = x;
    this.Y = y;
    this.Z = z;
  }
}

/**
 * Client API
 */
var API = {};

/**
 * Creates a blip either tied to an entity or static with range as an option and dimension.
 * @param {Vector3} pos
 * @returns {Blip}
 */
API.createBlip = function(pos) {}

/**
 * Sets the position of a blip.
 * @param {NetHandle} blip
 * @param {Vector3} newPos
 */
API.setBlipPosition = function(blip, newPos) {}

/**
 * Gets the position of a blip.
 * @param {NetHandle} blip
 * @returns {Vector3}
 */
API.getBlipPosition = function(blip) {}

/**
 * Sets the color of a blip.
 * @param {NetHandle} blip
 * @param {int} color
 */
API.setBlipColor = function(blip, color) {}

/**
 * Gets the color of a blip.
 * @param {NetHandle} blip
 * @returns {int}
 */
API.getBlipColor = function(blip) {}

/**
 * Sets the sprite (icon type) of a blip.
 * @param {NetHandle} blip
 * @param {int} sprite
 */
API.setBlipSprite = function(blip, sprite) {}

/**
 * Gets the sprite (icon type) of a blip.
 * @param {NetHandle} blip
 * @returns {int}
 */
API.getBlipSprite = function(blip) {}

/**
 * Sets the name of a blip. A blip's name is a title which can be viewed through the game map.
 * @param {NetHandle} blip
 * @param {string} name
 */
API.setBlipName = function(blip, name) {}

/**
 * Gets the name of a blip.
 * @param {NetHandle} blip
 * @returns {string}
 */
API.getBlipName = function(blip) {}

/**
 * Sets the transparency (alpha) of a blip.
 * @param {NetHandle} blip
 * @param {int} alpha
 */
API.setBlipTransparency = function(blip, alpha) {}

/**
 * Gets the transparency (alpha) of a blip.
 * @param {NetHandle} blip
 * @returns {int}
 */
API.getBlipTransparency = function(blip) {}

/**
 * Sets the range status of a blip.
 * @param {NetHandle} blip
 * @param {bool} range
 */
API.setBlipShortRange = function(blip, range) {}

/**
 * Gets the range status of a blip.
 * @param {NetHandle} blip
 * @returns {bool}
 */
API.getBlipShortRange = function(blip) {}

/**
 * Method allows the increase/decrease the size of a blip.
 * @param {NetHandle} blip
 * @param {float} scale
 */
API.setBlipScale = function(blip, scale) {}

/**
 * Gets the scale (size) of a blip.
 * @param {NetHandle} blip
 * @returns {float}
 */
API.getBlipScale = function(blip) {}

/**
 * Creates a CEF browser for the game to render.
 * @param {double} width
 * @param {double} height
 * @param {bool} local
 * @returns {Browser}
 */
API.createCefBrowser = function(width, height, local) {}

/**
 * Destroys a CefBrowser created with the function createCefBrowser
 * @param {Browser} browser
 */
API.destroyCefBrowser = function(browser) {}

/**
 * Checks if CEF Browser has been initialized.
 * @param {Browser} browser
 * @returns {bool}
 */
API.isCefBrowserInitialized = function(browser) {}

/**
 * Client-side Function Description
 * @param {Browser} browser
 */
API.waitUntilCefBrowserInit = function(browser) {}

/**
 * Waits until the browser has loaded the page.
 * @param {Browser} browser
 */
API.waitUntilCefBrowserLoaded = function(browser) {}

/**
 * Method allows resizing CefBrowser's size.
 * @param {Browser} browser
 * @param {double} width
 * @param {double} height
 */
API.setCefBrowserSize = function(browser, width, height) {}

/**
 * Client-side Function Description
 * @param {Browser} browser
 * @returns {Size}
 */
API.getCefBrowserSize = function(browser) {}

/**
 * Client-side Function Description
 * @param {Browser} browser
 * @param {bool} headless
 */
API.setCefBrowserHeadless = function(browser, headless) {}

/**
 * Client-side Function Description
 * @param {Browser} browser
 * @returns {bool}
 */
API.getCefBrowserHeadless = function(browser) {}

/**
 * Client-side Function Description
 * @param {Browser} browser
 * @param {double} xPos
 * @param {double} yPos
 */
API.setCefBrowserPosition = function(browser, xPos, yPos) {}

/**
 * Client-side Function Description
 * @param {Browser} browser
 * @returns {Point}
 */
API.getCefBrowserPosition = function(browser) {}

/**
 * Client-side Function Description
 * @param {Browser} browser
 * @param {double} x1
 * @param {double} y1
 * @param {double} x2
 * @param {double} y2
 * @param {double} x3
 * @param {double} y3
 * @param {double} x4
 * @param {double} y4
 */
API.pinCefBrowser = function(browser, x1, y1, x2, y2, x3, y3, x4, y4) {}

/**
 * Client-side Function Description
 * @param {Browser} browser
 */
API.clearCefPinning = function(browser) {}

/**
 * Client-side Function Description
 * @param {Browser} browser
 * @param {string} uri
 */
API.loadPageCefBrowser = function(browser, uri) {}

/**
 * Client-side Function Description
 * @param {Browser} browser
 * @returns {bool}
 */
API.isCefBrowserLoading = function(browser) {}

/**
 * This functions enables / disables the mouse cursor - primarily used for CEFs.
 * @param {bool} enable
 */
API.showCursor = function(enable) {}

/**
 * Returns whether the cursor is currently shown or not. Also see the showCursor function.
 * @returns {bool}
 */
API.isCursorShown = function() {}

/**
 * Client-side Function Description
 * @returns {PointF}
 */
API.getCursorPosition = function() {}

/**
 * Client-side Function Description
 * @returns {PointF}
 */
API.getCursorPositionMantainRatio = function() {}

/**
 * Creates a new Camera - this is just a plain variable and not shown in any way to the player.
 * @param {Vector3} position
 * @param {Vector3} rotation
 * @returns {GlobalCamera}
 */
API.createCamera = function(position, rotation) {}

/**
 * This method allows you to enable or disable the camera.
 * @param {GlobalCamera} camera
 */
API.setActiveCamera = function(camera) {}

/**
 * Client-side Function Description
 */
API.setGameplayCameraActive = function() {}

/**
 * Client-side Function Description
 * @returns {GlobalCamera}
 */
API.getActiveCamera = function() {}

/**
 * Client-side Function Description
 * @param {GlobalCamera} cam
 * @param {string} shakeType
 * @param {float} amplitute
 */
API.setCameraShake = function(cam, shakeType, amplitute) {}

/**
 * Client-side Function Description
 * @param {GlobalCamera} cam
 */
API.stopCameraShake = function(cam) {}

/**
 * Client-side Function Description
 * @param {GlobalCamera} cam
 * @returns {bool}
 */
API.isCameraShaking = function(cam) {}

/**
 * Client-side Function Description
 * @param {GlobalCamera} cam
 * @param {Vector3} pos
 */
API.setCameraPosition = function(cam, pos) {}

/**
 * This function should return the given Camera position.
 * @param {GlobalCamera} cam
 * @returns {Vector3}
 */
API.getCameraPosition = function(cam) {}

/**
 * Client-side Function Description
 * @param {GlobalCamera} cam
 * @param {Vector3} rotation
 */
API.setCameraRotation = function(cam, rotation) {}

/**
 * Client-side Function Description
 * @param {GlobalCamera} cam
 * @returns {Vector3}
 */
API.getCameraRotation = function(cam) {}

/**
 * Client-side Function Description
 * @param {GlobalCamera} cam
 * @param {float} fov
 */
API.setCameraFov = function(cam, fov) {}

/**
 * Client-side Function Description
 * @param {GlobalCamera} cam
 * @returns {float}
 */
API.getCameraFov = function(cam) {}

/**
 * Client-side Function Description
 * @param {GlobalCamera} cam
 * @param {Vector3} pos
 */
API.pointCameraAtPosition = function(cam, pos) {}

/**
 * Client-side Function Description
 * @param {GlobalCamera} cam
 * @param {LocalHandle} ent
 * @param {Vector3} offset
 */
API.pointCameraAtEntity = function(cam, ent, offset) {}

/**
 * Client-side Function Description
 * @param {GlobalCamera} cam
 * @param {LocalHandle} ent
 * @param {int} bone
 * @param {Vector3} offset
 */
API.pointCameraAtEntityBone = function(cam, ent, bone, offset) {}

/**
 * Client-side Function Description
 * @param {GlobalCamera} cam
 */
API.stopCameraPointing = function(cam) {}

/**
 * Client-side Function Description
 * @param {GlobalCamera} cam
 * @param {LocalHandle} ent
 * @param {Vector3} offset
 */
API.attachCameraToEntity = function(cam, ent, offset) {}

/**
 * Client-side Function Description
 * @param {GlobalCamera} cam
 * @param {LocalHandle} ent
 * @param {int} bone
 * @param {Vector3} offset
 */
API.attachCameraToEntityBone = function(cam, ent, bone, offset) {}

/**
 * Client-side Function Description
 * @param {GlobalCamera} cam
 */
API.detachCamera = function(cam) {}

/**
 * Client-side Function Description
 * @param {GlobalCamera} from
 * @param {GlobalCamera} to
 * @param {double} duration
 * @param {bool} easepos
 * @param {bool} easerot
 */
API.interpolateCameras = function(from, to, duration, easepos, easerot) {}

/**
 * Client-side Function Description
 * @returns {Vector3}
 */
API.getGameplayCamPos = function() {}

/**
 * Client-side Function Description
 * @returns {Vector3}
 */
API.getGameplayCamRot = function() {}

/**
 * Gets the direction of where the current player is looking as a Vector3.
 * @returns {<a href="/index.php?title=Vector3" title="Vector3">Vector3</a>}
 */
API.getGameplayCamDir = function() {}

/**
 * Client-side Function Description
 * @param {bool} force
 */
API.forceSendAimData = function(force) {}

/**
 * Client-side Function Description
 * @returns {bool}
 */
API.isAimDataForced = function() {}

/**
 * Client-side Function Description
 * @returns {JavascriptChat}
 */
API.registerChatOverride = function() {}

/**
 * Client-side Function Description
 * @param {bool} show
 */
API.setCanOpenChat = function(show) {}

/**
 * Client-side Function Description
 * @returns {bool}
 */
API.getCanOpenChat = function() {}

/**
 * This function sends a chat message.
 * @param {string} text
 */
API.sendChatMessage = function(text) {}

/**
 * Turns chat on or off.
 * @param {bool} display
 */
API.setChatVisible = function(display) {}

/**
 * Client-side Function Description
 * @returns {bool}
 */
API.getChatVisible = function() {}

/**
 * Client-side Function Description
 * @returns {bool}
 */
API.isChatOpen = function() {}

/**
 * Sets the given data value for the given entity and synchronizes this value to clients. Use setEntityData if the data should only exist on the server and shouldn't be synchronized. Check the Synchronized Types for which types you can synchronize with this.
 * @param {NetHandle} entity
 * @param {string} key
 * @param {object} value
 * @returns {bool}
 */
API.setEntitySyncedData = function(entity, key, value) {}

/**
 * Function Description
 * @param {NetHandle} entity
 * @param {string} key
 */
API.resetEntitySyncedData = function(entity, key) {}

/**
 * Function Description
 * @param {NetHandle} entity
 * @param {string} key
 * @returns {bool}
 */
API.hasEntitySyncedData = function(entity, key) {}

/**
 * Gets entity data that was set via setEntitySyncedData.
 * @param {NetHandle} entity
 * @param {string} key
 * @returns {dynamic}
 */
API.getEntitySyncedData = function(entity, key) {}

/**
 * Function Description
 * @param {string} key
 * @param {object} value
 * @returns {bool}
 */
API.setWorldSyncedData = function(key, value) {}

/**
 * Function Description
 * @param {string} key
 */
API.resetWorldSyncedData = function(key) {}

/**
 * Function Description
 * @param {string} key
 * @returns {bool}
 */
API.hasWorldSyncedData = function(key) {}

/**
 * Function Description
 * @param {string} key
 * @returns {dynamic}
 */
API.getWorldSyncedData = function(key) {}

/**
 * This function returns given Entity Position in Vector3 type.
 * @param {NetHandle} entity
 * @returns {Vector3}
 */
API.getEntityPosition = function(entity) {}

/**
 * Function Description
 * @param {NetHandle} entity
 * @returns {Vector3}
 */
API.getEntityRotation = function(entity) {}

/**
 * Client-side Function Description
 * @param {LocalHandle} entity
 * @returns {Vector3}
 */
API.getEntityVelocity = function(entity) {}

/**
 * Function Description
 * @param {NetHandle} entity
 * @returns {bool}
 */
API.doesEntityExist = function(entity) {}

/**
 * Function Description
 * @param {NetHandle} entity
 * @param {bool} invincible
 */
API.setEntityInvincible = function(entity, invincible) {}

/**
 * Function Description
 * @param {NetHandle} entity
 * @returns {bool}
 */
API.getEntityInvincible = function(entity) {}

/**
 * Function Description
 * @param {NetHandle} entity
 * @returns {bool}
 */
API.getEntityCollisionless = function(entity) {}

/**
 * Freezes an entity's position.
 * @param {NetHandle} entity
 * @param {bool} frozen
 */
API.setEntityPositionFrozen = function(entity, frozen) {}

/**
 * Client-side Function Description
 * @param {LocalHandle} entity
 * @param {Vector3} velocity
 */
API.setEntityVelocity = function(entity, velocity) {}

/**
 * Sets the position of an entity.
 * @param {NetHandle} netHandle
 * @param {Vector3} newPosition
 * @param {bool} ground = false
 */
API.setEntityPosition = function(netHandle, newPosition, ground) {}

/**
 * Function Description
 * @param {NetHandle} netHandle
 * @param {Vector3} newRotation
 */
API.setEntityRotation = function(netHandle, newRotation) {}

/**
 * Function Description
 * @param {NetHandle} netHandle
 */
API.deleteEntity = function(netHandle) {}

/**
 * Client-side Function Description
 * @param {LocalHandle} ent1
 * @param {LocalHandle} ent2
 * @param {string} bone
 * @param {Vector3} positionOffset
 * @param {Vector3} rotationOffset
 */
API.attachEntity = function(ent1, ent2, bone, positionOffset, rotationOffset) {}

/**
 * Detaches an entity previously attached using attachEntityToEntity
 * @param {NetHandle} entity
 * @param {bool} resetCollision = true
 */
API.detachEntity = function(entity, resetCollision) {}

/**
 * Function Description
 * @param {NetHandle} entity
 * @returns {bool}
 */
API.isEntityAttachedToAnything = function(entity) {}

/**
 * Function Description
 * @param {NetHandle} entity
 * @param {NetHandle} attachedTo
 * @returns {bool}
 */
API.isEntityAttachedToEntity = function(entity, attachedTo) {}

/**
 * Sets an entity's transparency (alpha).
 * @param {NetHandle} entity
 * @param {int} newAlpha
 */
API.setEntityTransparency = function(entity, newAlpha) {}

/**
 * Function Description
 * @param {NetHandle} handle
 * @returns {EntityType}
 */
API.getEntityType = function(handle) {}

/**
 * Client-side Function Description
 * @param {LocalHandle} entity
 * @returns {int}
 */
API.getEntityTransparency = function(entity) {}

/**
 * Function Description
 * @param {NetHandle} entity
 * @param {int} dimension
 */
API.setEntityDimension = function(entity, dimension) {}

/**
 * Function Description
 * @param {NetHandle} entity
 * @returns {int}
 */
API.getEntityDimension = function(entity) {}

/**
 * Function Description
 * @param {NetHandle} ent
 * @returns {int}
 */
API.getEntityModel = function(ent) {}

/**
 * This function will create a marker on your map.
 * @param {int} markerType
 * @param {Vector3} pos
 * @param {Vector3} dir
 * @param {Vector3} rot
 * @param {Vector3} scale
 * @param {int} r
 * @param {int} g
 * @param {int} b
 * @param {int} alpha
 */
API.createMarker = function(markerType, pos, dir, rot, scale, r, g, b, alpha) {}

/**
 * Function Description
 * @returns {List}
 */
API.getAllMarkers = function() {}

/**
 * Client-side Function Description
 * @returns {LocalHandle[]}
 */
API.getStreamedMarkers = function() {}

/**
 * Function Description
 * @param {NetHandle} marker
 * @param {int} type
 */
API.setMarkerType = function(marker, type) {}

/**
 * Returns Marker Type.
 * @param {LocalHandle} marker
 * @returns {int}
 */
API.getMarkerType = function(marker) {}

/**
 * Function Description
 * @param {NetHandle} marker
 * @param {int} alpha
 * @param {int} red
 * @param {int} green
 * @param {int} blue
 */
API.setMarkerColor = function(marker, alpha, red, green, blue) {}

/**
 * This function let's you choose which color should the marker have.
 * @param {LocalHandle} marker
 * @returns {Color}
 */
API.getMarkerColor = function(marker) {}

/**
 * Function Description
 * @param {NetHandle} marker
 * @param {Vector3} scale
 */
API.setMarkerScale = function(marker, scale) {}

/**
 * Client-side Function Description
 * @param {LocalHandle} marker
 * @returns {Vector3}
 */
API.getMarkerScale = function(marker) {}

/**
 * Client-side Function Description
 * @param {LocalHandle} marker
 * @param {Vector3} dir
 */
API.setMarkerDirection = function(marker, dir) {}

/**
 * Client-side Function Description?!
 * @param {LocalHandle} marker
 * @returns {Vector3}
 */
API.getMarkerDirection = function(marker) {}

/**
 * Creates a native menu that can be rendered on the screen.
 * @param {string} title
 * @param {string} subtitle
 * @param {double} x
 * @param {double} y
 * @param {int} anchor
 * @param {bool} enableBanner = true
 * @returns {UIMenu}
 */
API.createMenu = function(title, subtitle, x, y, anchor, enableBanner) {}

/**
 * This method creates a new menu item in a client-side menu.
 * @param {string} label
 * @param {string} description
 * @returns {<a href="/index.php?title=UIMenuItem" title="UIMenuItem">UIMenuItem</a>}
 */
API.createMenuItem = function(label, description) {}

/**
 * Client-side Function Description
 * @returns {MenuPool}
 */
API.getMenuPool = function() {}

/**
 * Client-side Function Description
 * @param {UIMenu} menu
 */
API.drawMenu = function(menu) {}

/**
 * Method allows changing the Banner Sprite (logo background) of a Menu.
 * @param {UIMenu} menu
 * @param {string} spritedict
 * @param {string} spritename
 */
API.setMenuBannerSprite = function(menu, spritedict, spritename) {}

/**
 * Client-side Function Description
 * @param {UIMenu} menu
 * @param {string} path
 */
API.setMenuBannerTexture = function(menu, path) {}

/**
 * Client-side Function Description
 * @param {UIMenu} menu
 * @param {int} alpha
 * @param {int} red
 * @param {int} green
 * @param {int} blue
 */
API.setMenuBannerRectangle = function(menu, alpha, red, green, blue) {}

/**
 * Client-side Function Description
 * @param {UIMenu} menu
 * @param {string} title
 */
API.setMenuTitle = function(menu, title) {}

/**
 * Sets a description to a menu item.
 * @param {UIMenu} menu
 * @param {string} text
 */
API.setMenuSubtitle = function(menu, text) {}

/**
 * Client-side Function Description
 * @param {string} label
 * @param {string} description
 * @param {string} hexColor
 * @param {string} hexHighlightColor
 * @returns {UIMenuColoredItem}
 */
API.createColoredItem = function(label, description, hexColor, hexHighlightColor) {}

/**
 * Client-side Function Description
 * @param {string} label
 * @param {string} description
 * @param {bool} isChecked
 * @returns {UIMenuCheckboxItem}
 */
API.createCheckboxItem = function(label, description, isChecked) {}

/**
 * Creates a list item on the menu.
 * @param {string} text
 * @param {string} description
 * @param {List<string>} items
 * @param {int} index
 * @returns {NOTE:}
 */
API.createListItem = function(text, description, items, index) {}

/**
 * Client-side Function Description
 * @param {string} defaultText
 * @param {int} maxlen
 * @returns {string}
 */
API.getUserInput = function(defaultText, maxlen) {}

/**
 * Adds a text element on the screen.
 * @param {string} caption
 * @param {double} x
 * @param {double} y
 * @param {double} scale
 * @param {int} r
 * @param {int} g
 * @param {int} b
 * @param {int} a
 * @param {int} font
 * @param {int} alignment
 * @returns {UIResText}
 */
API.addTextElement = function(caption, x, y, scale, r, g, b, a, font, alignment) {}

/**
 * Creates a basic Ped.
 * @param {PedHash} model
 * @param {Vector3} pos
 * @param {float} heading
 * @param {int} dimension = 0
 * @returns {NetHandle}
 */
API.createPed = function(model, pos, heading, dimension) {}

/**
 * Function Description
 * @param {string} modelName
 * @returns {PedHash}
 */
API.pedNameToModel = function(modelName) {}

/**
 * Client-side Function Description
 * @returns {LocalHandle[]}
 */
API.getStreamedPeds = function() {}

/**
 * Client-side Function Description
 * @returns {LocalHandle[]}
 */
API.getAllPeds = function() {}

/**
 * Client-side Function Description
 * @param {LocalHandle} ent
 * @returns {bool}
 */
API.isPed = function(ent) {}

/**
 * Client-side Function Description
 * @returns {int}
 */
API.getGamePlayer = function() {}

/**
 * Gets the handle of the local client
 * @returns {LocalHandle}
 */
API.getLocalPlayer = function() {}

/**
 * This function will tell you if the player is in an vehicle.
 * @param {Client} player
 * @returns {bool}
 */
API.isPlayerInAnyVehicle = function(player) {}

/**
 * This function will tell you if the player is on fire.
 * @param {Client} player
 * @returns {bool}
 */
API.isPlayerOnFire = function(player) {}

/**
 * Function Description
 * @param {Client} player
 * @returns {bool}
 */
API.isPlayerParachuting = function(player) {}

/**
 * Function Description
 * @param {Client} player
 * @returns {bool}
 */
API.isPlayerInFreefall = function(player) {}

/**
 * This function will tell you if the player is aiming.
 * @param {Client} player
 * @returns {bool}
 */
API.isPlayerAiming = function(player) {}

/**
 * Function Description
 * @param {Client} player
 * @returns {bool}
 */
API.isPlayerShooting = function(player) {}

/**
 * Function Description
 * @param {Client} player
 * @returns {bool}
 */
API.isPlayerReloading = function(player) {}

/**
 * Function Description
 * @param {Client} player
 * @returns {bool}
 */
API.isPlayerInCover = function(player) {}

/**
 * This function returns true, if specified player is on ladder, false otherwise.
 * @param {Client} player
 * @returns {bool}
 */
API.isPlayerOnLadder = function(player) {}

/**
 * Function Description
 * @param {Client} player
 * @returns {Vector3}
 */
API.getPlayerAimingPoint = function(player) {}

/**
 * This function will tell you if the player is dead or not.
 * @param {Client} player
 * @returns {bool}
 */
API.isPlayerDead = function(player) {}

/**
 * Function Description
 * @param {Client} player
 */
API.detonatePlayerStickies = function(player) {}

/**
 * Changes the Player's Nametag.
 * @param {LocalHandle} player
 * @param {string} text
 */
API.setPlayerNametag = function(player, text) {}

/**
 * Client-side Function Description
 * @param {LocalHandle} player
 */
API.resetPlayerNametag = function(player) {}

/**
 * Client-side Function Description
 * @param {LocalHandle} player
 * @param {bool} show
 */
API.setPlayerNametagVisible = function(player, show) {}

/**
 * Client-side Function Description
 * @param {LocalHandle} player
 * @returns {bool}
 */
API.getPlayerNametagVisible = function(player) {}

/**
 * Client-side Function Description
 * @param {LocalHandle} player
 * @param {byte} r
 * @param {byte} g
 * @param {byte} b
 */
API.setPlayerNametagColor = function(player, r, g, b) {}

/**
 * Resets Player nametag color.
 * @param {LocalHandle} player
 */
API.resetPlayerNametagColor = function(player) {}

/**
 * Set a skin to a defined player.
 * @param {int} skin
 */
API.setPlayerSkin = function(skin) {}

/**
 * Function Description
 * @param {Client} player
 */
API.setPlayerDefaultClothes = function(player) {}

/**
 * Function Description
 * @param {Client} player
 * @param {int} team
 */
API.setPlayerTeam = function(player, team) {}

/**
 * Function Description
 * @param {Client} player
 * @param {string} scenarioName
 */
API.playPlayerScenario = function(player, scenarioName) {}

/**
 * Function Description
 * @param {string} animDict
 * @param {string} animName
 * @param {int} flag
 * @param {int} duration = -1
 */
API.playPlayerAnimation = function(animDict, animName, flag, duration) {}

/**
 * Stops the animation of a player.
 * @param {Client} player
 */
API.stopPlayerAnimation = function(player) {}

/**
 * Sets the player's clothing. For a list of available styles in freemode skins, see Character Components.
 * @param {LocalHandle} player
 * @param {int} slot
 * @param {int} drawable
 * @param {int} texture
 */
API.setPlayerClothes = function(player, slot, drawable, texture) {}

/**
 * Sets a player's accessory prop. For more information and lists of props to use on freemode characters, see Character Components.
 * @param {Client} player
 * @param {int} slot
 * @param {int} drawable
 * @param {int} texture
 */
API.setPlayerAccessory = function(player, slot, drawable, texture) {}

/**
 * This function let's you clear the player accessories.
 * @param {Client} player
 * @param {int} slot
 */
API.clearPlayerAccessory = function(player, slot) {}

/**
 * Function Description
 * @param {Client} player
 */
API.clearPlayerTasks = function(player) {}

/**
 * Returns the seat ID that the player is currently occupying.
 * @param {Client} player
 * @returns {int}
 */
API.getPlayerVehicleSeat = function(player) {}

/**
 * Function Description
 * @param {Client} player
 * @param {WeaponHash} weapon
 * @param {WeaponTint} tint
 */
API.setPlayerWeaponTint = function(player, weapon, tint) {}

/**
 * Function Description
 * @param {Client} player
 * @param {WeaponHash} weapon
 * @returns {WeaponTint}
 */
API.getPlayerWeaponTint = function(player, weapon) {}

/**
 * Function Description
 * @param {Client} player
 * @param {WeaponHash} weapon
 * @param {WeaponComponent} component
 */
API.givePlayerWeaponComponent = function(player, weapon, component) {}

/**
 * This function will remove a player weapon component.
 * @param {Client} player
 * @param {WeaponHash} weapon
 * @param {WeaponComponent} component
 */
API.removePlayerWeaponComponent = function(player, weapon, component) {}

/**
 * Client-side Function Description
 * @param {int} weapon
 * @param {int} component
 * @returns {bool}
 */
API.hasPlayerWeaponComponent = function(weapon, component) {}

/**
 * Function Description
 * @param {WeaponHash} weapon
 * @returns {WeaponComponent[]}
 */
API.getAllWeaponComponents = function(weapon) {}

/**
 * This function will tell you which weapon has the player in the hand. See also Weapons Models.
 * @param {Client} player
 * @returns {WeaponHash}
 */
API.getPlayerCurrentWeapon = function(player) {}

/**
 * Places a player into the given vehicle and seat.
 * @param {LocalHandle} vehicle
 * @param {int} seat
 */
API.setPlayerIntoVehicle = function(vehicle, seat) {}

/**
 * This function gives a player health.
 * @param {Client} player
 * @param {int} health
 */
API.setPlayerHealth = function(player, health) {}

/**
 * This function will tell you, how much health has the player.
 * @param {Client} player
 * @returns {float}
 */
API.getPlayerHealth = function(player) {}

/**
 * Client-side Function Description
 * @param {bool} invinc
 */
API.setPlayerInvincible = function(invinc) {}

/**
 * Sets the wanted level of the defined player.
 * @param {Client} player
 * @param {int} wantedLevel
 */
API.setPlayerWantedLevel = function(player, wantedLevel) {}

/**
 * Returns the player wanted level.
 * @param {Client} player
 * @returns {int}
 */
API.getPlayerWantedLevel = function(player) {}

/**
 * Returns if the player is invincible or not.
 * @returns {bool}
 */
API.getPlayerInvincible = function() {}

/**
 * This function gives a player armor.
 * @param {Client} player
 * @param {int} armor
 */
API.setPlayerArmor = function(player, armor) {}

/**
 * This function will tell you how much armor has the player.
 * @param {Client} player
 * @returns {int}
 */
API.getPlayerArmor = function(player) {}

/**
 * Client-side Function Description
 * @returns {LocalHandle[]}
 */
API.getStreamedPlayers = function() {}

/**
 * Gets all currently connected players in the server
 * @returns {Client}
 */
API.getAllPlayers = function() {}

/**
 * Function Description
 * @param {Client} player
 * @returns {NetHandle}
 */
API.getPlayerVehicle = function(player) {}

/**
 * Client-side Function Description
 * @param {string} name
 * @returns {LocalHandle}
 */
API.getPlayerByName = function(name) {}

/**
 * Gets the current player's name
 * @param {Client} player
 * @returns {string}
 */
API.getPlayerName = function(player) {}

/**
 * Client-side Function Description
 * @param {LocalHandle} player
 * @returns {Vector3}
 */
API.getPlayerAimCoords = function(player) {}

/**
 * Gets the current player ping
 * @param {Client} player
 * @returns {int}
 */
API.getPlayerPing = function(player) {}

/**
 * Client-side Function Description
 * @param {LocalHandle} player
 */
API.requestControlOfPlayer = function(player) {}

/**
 * Client-side Function Description
 * @param {LocalHandle} player
 */
API.stopControlOfPlayer = function(player) {}

/**
 * Gives the given player a weapon of the given type. See also Weapons Models.
 * @param {Client} player
 * @param {WeaponHash} weaponHash
 * @param {int} ammo
 * @param {bool} equipNow
 * @param {bool} ammoLoaded
 */
API.givePlayerWeapon = function(player, weaponHash, ammo, equipNow, ammoLoaded) {}

/**
 * This function removes all player weapons.
 * @param {Client} player
 */
API.removeAllPlayerWeapons = function(player) {}

/**
 * Client-side Function Description
 * @param {int} weapon
 * @returns {bool}
 */
API.doesPlayerHaveWeapon = function(weapon) {}

/**
 * This function will remove the player weapon that you define.
 * @param {Client} player
 * @param {WeaponHash} weapon
 */
API.removePlayerWeapon = function(player, weapon) {}

/**
 * Creates a 3D Text label.
 * @param {string} text
 * @param {Vector3} pos
 * @param {float} range
 * @param {float} size
 * @param {bool} entitySeethrough = false
 * @returns {NetHandle}
 */
API.createTextLabel = function(text, pos, range, size, entitySeethrough) {}

/**
 * Sets the text of a TextLabel created with createTextLabel.
 * @param {NetHandle} label
 * @param {string} newText
 */
API.setTextLabelText = function(label, newText) {}

/**
 * Function Description
 * @param {NetHandle} label
 * @param {int} alpha
 * @param {int} red
 * @param {int} green
 * @param {int} blue
 */
API.setTextLabelColor = function(label, alpha, red, green, blue) {}

/**
 * Client-side Function Description
 * @param {LocalHandle} textLabel
 * @returns {Color}
 */
API.getTextLabelColor = function(textLabel) {}

/**
 * This function should allow you to update the Seethrough parameter of your TextLabel.
 * @param {NetHandle} label
 * @param {bool} seethrough
 */
API.setTextLabelSeethrough = function(label, seethrough) {}

/**
 * Client-side Function Description
 * @param {LocalHandle} handle
 * @returns {bool}
 */
API.getTextLabelSeethrough = function(handle) {}

/**
 * Creates a vehicle.
 * @param {int} model
 * @param {Vector3} pos
 * @param {float} heading
 */
API.createVehicle = function(model, pos, heading) {}

/**
 * Destroys the vehicle
 * @param {LocalHandle} vehicle
 */
API.explodeVehicle = function(vehicle) {}

/**
 * Function Description
 * @param {NetHandle} vehicle
 * @returns {float}
 */
API.getVehicleHealth = function(vehicle) {}

/**
 * Gets all of the vehicles currently in the server
 * @returns {List}
 */
API.getAllVehicles = function() {}

/**
 * Client-side Function Description
 * @returns {LocalHandle[]}
 */
API.getStreamedVehicles = function() {}

/**
 * Client-side Function Description
 * @param {LocalHandle} ent
 * @returns {bool}
 */
API.isVehicle = function(ent) {}

/**
 * Client-side Function Description
 * @param {LocalHandle} entity
 * @returns {float}
 */
API.getVehicleRPM = function(entity) {}

/**
 * Function Description
 * @param {NetHandle} vehicle
 * @param {int} livery
 */
API.setVehicleLivery = function(vehicle, livery) {}

/**
 * Function Description
 * @param {NetHandle} vehicle
 * @returns {int}
 */
API.getVehicleLivery = function(vehicle) {}

/**
 * Function Description
 * @param {NetHandle} vehicle
 * @returns {NetHandle}
 */
API.getVehicleTrailer = function(vehicle) {}

/**
 * Function Description
 * @param {NetHandle} vehicle
 * @returns {NetHandle}
 */
API.getVehicleTraileredBy = function(vehicle) {}

/**
 * Function Description
 * @param {NetHandle} vehicle
 * @returns {bool}
 */
API.getVehicleSirenState = function(vehicle) {}

/**
 * Function Description
 * @param {NetHandle} vehicle
 * @param {int} tyre
 * @returns {bool}
 */
API.isVehicleTyrePopped = function(vehicle, tyre) {}

/**
 * Function Description
 * @param {NetHandle} vehicle
 * @param {int} tyre
 * @param {bool} pop
 */
API.popVehicleTyre = function(vehicle, tyre, pop) {}

/**
 * Function Description
 * @param {NetHandle} vehicle
 * @param {int} door
 * @returns {bool}
 */
API.isVehicleDoorBroken = function(vehicle, door) {}

/**
 * Breaks the tyre of a vehicle.
 * @param {LocalHandle} vehicle
 * @param {int} door
 * @param {bool} breakDoor
 */
API.breakVehicleTyre = function(vehicle, door, breakDoor) {}

/**
 * Returns if the vehicle windows is broken.
 * @param {NetHandle} vehicle
 * @param {int} window
 * @returns {bool}
 */
API.isVehicleWindowBroken = function(vehicle, window) {}

/**
 * This function breaks the vehicle window.
 * @param {NetHandle} vehicle
 * @param {int} window
 * @param {bool} breakWindow
 */
API.breakVehicleWindow = function(vehicle, window, breakWindow) {}

/**
 * Function Description
 * @param {NetHandle} vehicle
 * @param {int} slot
 * @param {bool} enabled
 */
API.setVehicleExtra = function(vehicle, slot, enabled) {}

/**
 * Function Description
 * @param {NetHandle} vehicle
 * @param {int} slot
 * @returns {bool}
 */
API.getVehicleExtra = function(vehicle, slot) {}

/**
 * This function sets the number plate of a vehicle.
 * @param {NetHandle} vehicle
 * @param {string} plate
 */
API.setVehicleNumberPlate = function(vehicle, plate) {}

/**
 * Function Description
 * @param {NetHandle} vehicle
 * @returns {string}
 */
API.getVehicleNumberPlate = function(vehicle) {}

/**
 * Function Description
 * @param {NetHandle} vehicle
 * @param {bool} turnedOn
 */
API.setVehicleEngineStatus = function(vehicle, turnedOn) {}

/**
 * Function Description
 * @param {NetHandle} vehicle
 * @param {bool} turnedOn
 */
API.setVehicleSpecialLightStatus = function(vehicle, turnedOn) {}

/**
 * Function Description
 * @param {NetHandle} vehicle
 * @returns {bool}
 */
API.getVehicleSpecialLightStatus = function(vehicle) {}

/**
 * Sets a specific vehicle modification to a slot.
 * @param {NetHandle} vehicle
 * @param {int} modType
 * @param {int} mod
 */
API.setVehicleMod = function(vehicle, modType, mod) {}

/**
 * Function Description
 * @param {NetHandle} vehicle
 * @param {int} slot
 * @returns {int}
 */
API.getVehicleMod = function(vehicle, slot) {}

/**
 * This function removes mods attached to a vehicle.
 * @param {NetHandle} vehicle
 * @param {int} modType
 */
API.removeVehicleMod = function(vehicle, modType) {}

/**
 * This function set the tires for a vehicle bulletproof. Or set them to a normal, not bulletproof state.
 * @param {NetHandle} vehicle
 * @param {bool} bulletproof
 */
API.setVehicleBulletproofTyres = function(vehicle, bulletproof) {}

/**
 * Function Description
 * @param {NetHandle} vehicle
 * @returns {bool}
 */
API.getVehicleBulletproofTyres = function(vehicle) {}

/**
 * This function sets the style of a vehicle number plate. You can see which styles are available down.
 * @param {NetHandle} vehicle
 * @param {int} style
 */
API.setVehicleNumberPlateStyle = function(vehicle, style) {}

/**
 * Function Description
 * @param {NetHandle} vehicle
 * @returns {int}
 */
API.getVehicleNumberPlateStyle = function(vehicle) {}

/**
 * Function Description
 * @param {NetHandle} vehicle
 * @param {int} color
 */
API.setVehiclePearlescentColor = function(vehicle, color) {}

/**
 * Function Description
 * @param {NetHandle} vehicle
 * @returns {int}
 */
API.getVehiclePearlescentColor = function(vehicle) {}

/**
 * This sets the color of a vehicle wheels.
 * @param {NetHandle} vehicle
 * @param {int} color
 */
API.setVehicleWheelColor = function(vehicle, color) {}

/**
 * Returns the color of the wheels.
 * @param {NetHandle} vehicle
 * @returns {int}
 */
API.getVehicleWheelColor = function(vehicle) {}

/**
 * This function sets the type of the vehicle wheels.
 * @param {NetHandle} vehicle
 * @param {int} type
 */
API.setVehicleWheelType = function(vehicle, type) {}

/**
 * Function Description
 * @param {NetHandle} vehicle
 * @returns {int}
 */
API.getVehicleWheelType = function(vehicle) {}

/**
 * This function sets the vehicle mod first color.
 * @param {NetHandle} vehicle
 * @param {int} r
 * @param {int} g
 * @param {int} b
 */
API.setVehicleModColor1 = function(vehicle, r, g, b) {}

/**
 * Returns Vehicle's mod color 1 in RGB.
 * @param {NetHandle} vehicle
 * @param {out} byte red
 * @param {out} byte green
 * @param {out} byte blue
 */
API.getVehicleModColor1 = function(vehicle, byte, byte, byte) {}

/**
 * This function sets the vehicle mod second color.
 * @param {NetHandle} vehicle
 * @param {int} r
 * @param {int} g
 * @param {int} b
 */
API.setVehicleModColor2 = function(vehicle, r, g, b) {}

/**
 * Returns Vehicle's mod color 2 in RGB.
 * @param {NetHandle} vehicle
 * @param {out} byte red
 * @param {out} byte green
 * @param {out} byte blue
 */
API.getVehicleModColor2 = function(vehicle, byte, byte, byte) {}

/**
 * Function Description
 * @param {NetHandle} vehicle
 * @param {int} r
 * @param {int} g
 * @param {int} b
 */
API.setVehicleTyreSmokeColor = function(vehicle, r, g, b) {}

/**
 * Returns Vehicle's tires smoke color in RGB
 * @param {NetHandle} vehicle
 * @param {out} byte red
 * @param {out} byte green
 * @param {out} byte blue
 */
API.getVehicleTyreSmokeColor = function(vehicle, byte, byte, byte) {}

/**
 * Function Description
 * @param {NetHandle} vehicle
 * @param {int} type
 */
API.setVehicleWindowTint = function(vehicle, type) {}

/**
 * Function Description
 * @param {NetHandle} vehicle
 * @returns {int}
 */
API.getVehicleWindowTint = function(vehicle) {}

/**
 * Function Description
 * @param {NetHandle} vehicle
 * @param {float} mult
 */
API.setVehicleEnginePowerMultiplier = function(vehicle, mult) {}

/**
 * Function Description
 * @param {NetHandle} vehicle
 * @returns {float}
 */
API.getVehicleEnginePowerMultiplier = function(vehicle) {}

/**
 * Function Description
 * @param {NetHandle} vehicle
 * @param {float} mult
 */
API.setVehicleEngineTorqueMultiplier = function(vehicle, mult) {}

/**
 * Function Description
 * @param {NetHandle} vehicle
 * @returns {float}
 */
API.getVehicleEngineTorqueMultiplier = function(vehicle) {}

/**
 * Function Description
 * @param {NetHandle} vehicle
 * @param {int} slot
 * @param {bool} turnedOn
 */
API.setVehicleNeonState = function(vehicle, slot, turnedOn) {}

/**
 * Function Description
 * @param {NetHandle} vehicle
 * @param {int} slot
 * @returns {bool}
 */
API.getVehicleNeonState = function(vehicle, slot) {}

/**
 * This function sets the neon color of a vehicle.
 * @param {NetHandle} vehicle
 * @param {int} r
 * @param {int} g
 * @param {int} b
 */
API.setVehicleNeonColor = function(vehicle, r, g, b) {}

/**
 * Returns Vehicle's neon color in RGB.
 * @param {NetHandle} vehicle
 * @param {out} byte red
 * @param {out} byte green
 * @param {out} byte blue
 */
API.getVehicleNeonColor = function(vehicle, byte, byte, byte) {}

/**
 * Function Description
 * @param {NetHandle} vehicle
 * @param {int} type
 */
API.setVehicleDashboardColor = function(vehicle, type) {}

/**
 * Returns Vehicle's dashboard color.
 * @param {NetHandle} vehicle
 * @returns {int}
 */
API.getVehicleDashboardColor = function(vehicle) {}

/**
 * Function Description
 * @param {NetHandle} vehicle
 * @param {int} type
 */
API.setVehicleTrimColor = function(vehicle, type) {}

/**
 * Function Description
 * @param {NetHandle} vehicle
 * @returns {int}
 */
API.getVehicleTrimColor = function(vehicle) {}

/**
 * Get`s display name for vehicle.
 * @param {VehicleHash} model
 * @returns {string}
 */
API.getVehicleDisplayName = function(model) {}

/**
 * Returns the maximal speed of a vehicle.
 * @param {VehicleHash} model
 * @returns {float}
 */
API.getVehicleMaxSpeed = function(model) {}

/**
 * Returns the maximal braking of a vehicle.
 * @param {VehicleHash} model
 * @returns {float}
 */
API.getVehicleMaxBraking = function(model) {}

/**
 * Function Description
 * @param {VehicleHash} model
 * @returns {float}
 */
API.getVehicleMaxTraction = function(model) {}

/**
 * Returns the maximal accelaration of the vehicle.
 * @param {VehicleHash} model
 * @returns {float}
 */
API.getVehicleMaxAcceleration = function(model) {}

/**
 * Returns the maximum peds a vehicle can hold
 * @param {VehicleHash} model
 * @returns {float}
 */
API.getVehicleMaxOccupants = function(model) {}

/**
 * Gets the vehicle class associated with the given vehicle hash. See Vehicle Classes for a list of classes.
 * @param {"Vehicle} class: ~r~" + vehicleClass
 * @returns {int}
 */
API.sendChatMessage = function(class:) {}

/**
 * Function Description
 * @param {NetHandle} vehicle
 * @param {int} color
 */
API.setVehiclePrimaryColor = function(vehicle, color) {}

/**
 * Function Description
 * @param {NetHandle} vehicle
 * @param {int} color
 */
API.setVehicleSecondaryColor = function(vehicle, color) {}

/**
 * Function Description
 * @param {NetHandle} vehicle
 * @param {int} red
 * @param {int} green
 * @param {int} blue
 */
API.setVehicleCustomPrimaryColor = function(vehicle, red, green, blue) {}

/**
 * Function Description
 * @param {NetHandle} vehicle
 * @param {int} red
 * @param {int} green
 * @param {int} blue
 */
API.setVehicleCustomSecondaryColor = function(vehicle, red, green, blue) {}

/**
 * Returns Vehicle's custom primary color in RGB.
 * @param {NetHandle} vehicle
 * @param {out} byte red
 * @param {out} byte green
 * @param {out} byte blue
 */
API.getVehicleCustomPrimaryColor = function(vehicle, byte, byte, byte) {}

/**
 * Returns Vehicle's custom Secondary color in RGB.
 * @param {NetHandle} vehicle
 * @param {out} byte red
 * @param {out} byte green
 * @param {out} byte blue
 */
API.getVehicleCustomSecondaryColor = function(vehicle, byte, byte, byte) {}

/**
 * Function Description
 * @param {NetHandle} vehicle
 * @returns {int}
 */
API.getVehiclePrimaryColor = function(vehicle) {}

/**
 * Function Description
 * @param {NetHandle} vehicle
 * @returns {int}
 */
API.getVehicleSecondaryColor = function(vehicle) {}

/**
 * Converts vehicle model name to vehicle hash.
 * @param {string} modelName
 * @returns {VehicleHash}
 */
API.vehicleNameToModel = function(modelName) {}

/**
 * This function sets the world time. You can get this value with getTime. If this is called on the server, it will set the time for every player. If this is called on the client, the time is only changed for that client.
 * @param {int} hours
 * @param {int} minutes
 */
API.setTime = function(hours, minutes) {}

/**
 * Client-side Function Description
 */
API.resetTime = function() {}

/**
 * Sets the world weather for all players when used in Server-side.
 * @param {int} weather
 */
API.setWeather = function(weather) {}

/**
 * This function resets the weather on the server.
 */
API.resetWeather = function() {}

/**
 * Gets the amount of milliseconds since the game started.
 * @returns {int}
 */
API.getGameTime = function() {}

/**
 * Returns time in milliseconds since the client-side script was started.
 * @returns {int}
 */
API.getGlobalTime = function() {}

/**
 * Client-side Function Description
 * @param {Vector3} start
 * @param {Vector3} end
 * @param {int} flag
 * @param {LocalHandle?} ignoreEntity
 * @returns {<a href="/index.php?title=Raycast" title="Raycast">Raycast</a>}
 */
API.createRaycast = function(start, end, flag, ignoreEntity) {}

/**
 * Client-side Function Description
 * @param {Vector3} pos
 * @returns {PointF}
 */
API.worldToScreen = function(pos) {}

/**
 * Client-side Function Description
 * @param {Vector3} pos
 * @returns {PointF}
 */
API.worldToScreenMantainRatio = function(pos) {}

/**
 * Client-side Function Description
 * @param {PointF} pos
 * @returns {Vector3}
 */
API.screenToWorld = function(pos) {}

/**
 * Client-side Function Description
 * @param {PointF} pos
 * @returns {Vector3}
 */
API.screenToWorldMantainRatio = function(pos) {}

/**
 * Client-side Function Description
 * @param {LocalHandle} entity
 * @param {Vector3} offset
 * @returns {Vector3}
 */
API.getOffsetInWorldCoords = function(entity, offset) {}

/**
 * Client-side Function Description
 * @param {LocalHandle} entity
 * @param {Vector3} pos
 * @returns {Vector3}
 */
API.getOffsetFromWorldCoords = function(entity, pos) {}

/**
 * Client-side Function Description
 * @returns {SizeF}
 */
API.getScreenResolutionMantainRatio = function() {}

/**
 * Client-side Function Description
 * @returns {Size}
 */
API.getScreenResolution = function() {}

/**
 * resourceCall allows you to invoke methods in your clientside script from a CEF browser.
 * @param {string} functionName
 * @param {params} object[] arguments
 */
API.resourceCall = function(functionName, object[]) {}

/**
 * Client-side Function Description
 * @param {string} code
 */
API.resourceEval = function(code) {}

/**
 * Function Description
 * @param {string} key
 * @param {object} value
 * @returns {bool}
 */
API.setWorldData = function(key, value) {}

/**
 * Function Description
 * @param {string} key
 */
API.resetWorldData = function(key) {}

/**
 * Function Description
 * @param {string} key
 * @returns {bool}
 */
API.hasWorldData = function(key) {}

/**
 * Function Description
 * @param {string} key
 * @returns {dynamic}
 */
API.getWorldData = function(key) {}

/**
 * Calls a native.
 * @param {string} hash
 * @param {Object[]} args
 */
API.callNative = function(hash, args) {}

/**
 * Client-side Function Description
 * @param {string} hash
 * @param {int} returnType
 * @param {Object[]} args
 * @returns {Object}
 */
API.returnNative = function(hash, returnType, args) {}

/**
 * Client-side Function Description
 * @returns {LocalHandle[]}
 */
API.getStreamedObjects = function() {}

/**
 * Client-side Function Description
 * @returns {LocalHandle[]}
 */
API.getStreamedPickups = function() {}

/**
 * Client-side Function Description
 * @returns {LocalHandle[]}
 */
API.getStreamedTextLabels = function() {}

/**
 * Function Description
 * @returns {List}
 */
API.getAllObjects = function() {}

/**
 * Function Description
 * @returns {List}
 */
API.getAllPickups = function() {}

/**
 * Client-side Function Description
 * @returns {LocalHandle[]}
 */
API.getAllTextLabels = function() {}

/**
 * Client-side Function Description
 * @param {int} model
 */
API.loadModel = function(model) {}

/**
 * Client-side Function Description
 * @param {LocalHandle} ent
 * @returns {bool}
 */
API.isProp = function(ent) {}

/**
 * Gets the status of HUD visiblity
 * @returns {bool}
 */
API.getHudVisible = function() {}

/**
 * Client-side Function Description
 * @param {bool} visible
 */
API.setHudVisible = function(visible) {}

/**
 * Client-side Function Description
 * @param {int} r
 * @param {int} g
 * @param {int} b
 */
API.setUiColor = function(r, g, b) {}

/**
 * Client-side Function Description
 * @param {string} text
 */
API.displaySubtitle = function(text) {}

/**
 * Client-side Function Description
 * @param {string} scaleformName
 * @returns {Scaleform}
 */
API.requestScaleform = function(scaleformName) {}

/**
 * Client-side Function Description
 * @param {Scaleform} sc
 * @param {double} x
 * @param {double} y
 * @param {double} w
 * @param {double} h
 */
API.renderScaleform = function(sc, x, y, w, h) {}

/**
 * Client-side Function Description
 * @param {string} text
 */
API.showShard = function(text) {}

/**
 * This method draws a custom graphic to the screen using DirectX.
 * @param {string} path
 * @param {Point} pos
 * @param {Size} size
 * @param {double} rotation = 0.0
 */
API.dxDrawTexture = function(path, pos, size, rotation) {}

/**
 * Client-side Function Description
 * @param {double} xPos
 * @param {double} yPos
 * @param {double} wSize
 * @param {double} hSize
 * @param {int} r
 * @param {int} g
 * @param {int} b
 * @param {int} alpha
 */
API.drawRectangle = function(xPos, yPos, wSize, hSize, r, g, b, alpha) {}

/**
 * Draws a line in 3D Space.
 * @param {Vector3} start
 * @param {Vector3} end
 * @param {int} a
 * @param {int} r
 * @param {int} g
 * @param {int} b
 */
API.drawLine = function(start, end, a, r, g, b) {}

/**
 * Client-side Function Description
 * @param {string} caption
 * @param {double} xPos
 * @param {double} yPos
 * @param {double} scale
 * @param {int} r
 * @param {int} g
 * @param {int} b
 * @param {int} alpha
 * @param {int} font
 * @param {int} justify
 * @param {bool} shadow
 * @param {bool} outline
 * @param {int} wordWrap
 */
API.drawText = function(caption, xPos, yPos, scale, r, g, b, alpha, font, justify, shadow, outline, wordWrap) {}

/**
 * Client-side Function Description
 * @returns {Vector3}
 */
API.getWaypointPosition = function() {}

/**
 * Client-side Function Description
 * @returns {bool}
 */
API.isWaypointSet = function() {}

/**
 * Adds a waypoint to your minimap and main map.
 * @param {double} xPos
 * @param {double} yPos
 */
API.setWaypoint = function(xPos, yPos) {}

/**
 * Removes the current waypoint.
 */
API.removeWaypoint = function() {}

/**
 * This function will send a defined notification to a player.
 * @param {string} text
 */
API.sendNotification = function(text) {}

/**
 * Client-side Function Description
 * @param {int} control
 * @returns {bool}
 */
API.isControlJustPressed = function(control) {}

/**
 * Client-side Function Description
 * @param {int} control
 * @returns {bool}
 */
API.isControlPressed = function(control) {}

/**
 * Client-side Function Description
 * @param {int} control
 * @returns {bool}
 */
API.isDisabledControlJustReleased = function(control) {}

/**
 * Client-side Function Description
 * @param {int} control
 * @returns {bool}
 */
API.isDisabledControlJustPressed = function(control) {}

/**
 * Client-side Function Description
 * @param {int} control
 * @returns {bool}
 */
API.isDisabledControlPressed = function(control) {}

/**
 * Client-side Function Description
 * @param {int} control
 * @returns {bool}
 */
API.isControlJustReleased = function(control) {}

/**
 * Client-side Function Description
 * @param {int} control
 */
API.disableControlThisFrame = function(control) {}

/**
 * Client-side Function Description
 * @param {int} control
 */
API.enableControlThisFrame = function(control) {}

/**
 * Client-side Function Description
 */
API.disableAllControlsThisFrame = function() {}

/**
 * This function plays a audio, that you define.
 * @param {string} path
 * @param {bool} looped
 */
API.startAudio = function(path, looped) {}

/**
 * Client-side Function Description
 */
API.pauseAudio = function() {}

/**
 * Client-side Function Description
 */
API.resumeAudio = function() {}

/**
 * Client-side Function Description
 * @param {double} seconds
 */
API.setAudioTime = function(seconds) {}

/**
 * Client-side Function Description
 * @returns {double}
 */
API.getAudioTime = function() {}

/**
 * Client-side Function Description
 * @returns {bool}
 */
API.isAudioPlaying = function() {}

/**
 * This function will set the game volume.
 * @param {double} vol
 */
API.setGameVolume = function(vol) {}

/**
 * Client-side Function Description
 * @returns {bool}
 */
API.isAudioInitialized = function() {}

/**
 * This function stops audio if one is playing. To play a audio use startAudio function.
 */
API.stopAudio = function() {}

/**
 * Plays an audio from in-game's audio library.
 * @param {string} soundName
 * @param {string} soundSetName
 */
API.playSoundFrontEnd = function(soundName, soundSetName) {}

/**
 * This function creates a explosion.
 * @param {int} explosionType
 * @param {Vector3} position
 * @param {float} damageScale
 * @param {int} dimension = 0
 */
API.createExplosion = function(explosionType, position, damageScale, dimension) {}

/**
 * Creates an explosion with the given parameters. The difference between createOwnedExplosion and createExplosion is owned explosions do not damage the owner, however any fire/flames associated to the explosion will.
 * @param {Client} owner
 * @param {int} explosionType
 * @param {Vector3} position
 * @param {float} damageScale
 * @param {int} dimension = 0
 */
API.createOwnedExplosion = function(owner, explosionType, position, damageScale, dimension) {}

/**
 * Client-side Function Description
 * @returns {string}
 */
API.getCurrentResourceName = function() {}

/**
 * Client-side Function Description
 * @param {string} fileName
 * @returns {string}
 */
API.getResourceFilePath = function(fileName) {}

/**
 * Checks if any of the resource's files on the client have been changed. If it has, the client will disconnect from the server.
 */
API.verifyIntegrityOfCache = function() {}

/**
 * Client-side Function Description
 * @returns {float}
 */
API.getAveragePacketSize = function() {}

/**
 * Client-side Function Description
 * @returns {float}
 */
API.getBytesSentPerSecond = function() {}

/**
 * Client-side Function Description
 * @returns {float}
 */
API.getBytesReceivedPerSecond = function() {}

/**
 * Function Description
 * @param {string} input
 * @returns {int}
 */
API.getHashKey = function(input) {}

/**
 * Function Description
 * @param {string} modelName
 * @returns {WeaponHash}
 */
API.weaponNameToModel = function(modelName) {}

/**
 * Client-side Function Description
 * @param {string} reason
 */
API.disconnect = function(reason) {}

/**
 * Function Description
 * @param {string} configName
 * @returns {XmlGroup}
 */
API.loadConfig = function(configName) {}

/**
 * Function Description
 * @param {string} json
 * @returns {dynamic}
 */
API.fromJson = function(json) {}

/**
 * Serializes arrays and objects into JSON format.
 * @param {object} data
 * @returns {string}
 */
API.toJson = function(data) {}

/**
 * Client-side Function Description
 * @param {Object} obj
 * @returns {string}
 */
API.toString = function(obj) {}

/**
 * Client-side Function Description
 * @param {double} d
 * @returns {float}
 */
API.toFloat = function(d) {}

/**
 * Client-side Function Description
 * @param {double} ms
 * @param {string} format
 * @returns {string}
 */
API.formatTime = function(ms, format) {}

/**
 * Client-side Function Description
 * @returns {bool}
 */
API.isSpectating = function() {}

/**
 * Client-side Function Description
 * @param {Vector3} start
 * @param {Vector3} end
 * @param {double} currentTime
 * @param {double} duration
 * @returns {Vector3}
 */
API.lerpVector = function(start, end, currentTime, duration) {}

/**
 * Client-side Function Description
 * @param {double} start
 * @param {double} end
 * @param {double} currentTime
 * @param {double} duration
 * @returns {double}
 */
API.lerpFloat = function(start, end, currentTime, duration) {}

/**
 * Client-side Function Description
 * @param {Vector3} entity
 * @param {Vector3} destination
 * @param {double} range
 * @returns {bool}
 */
API.isInRangeOf = function(entity, destination, range) {}

/**
 * Client-side Function Description
 * @param {Vector3} from
 * @param {Vector3} to
 * @returns {double}
 */
API.angleBetween = function(from, to) {}

/**
 * This function is used to declare explicit floating-point arguments inside API.callNative and API.returnNative parameters.
 * @param {double} value
 * @returns {fArg}
 */
API.f = function(value) {}

/**
 * Sleeps the current thread for the given amount of milliseconds. Only use in a multithreaded environment.
 * @param {int} ms
 */
API.sleep = function(ms) {}

/**
 * Triggers a server-side event from the client to the server. For the inverse method of this (server to client), see triggerClientEvent.
 * @param {string} eventName
 * @param {Object[]} arguments
 */
API.triggerServerEvent = function(eventName, arguments) {}

/**
 * Client-side Function Description
 * @param {string} dict
 */
API.loadAnimationDict = function(dict) {}

/**
 * This type of event can be used to filter, disable or even use as command handler but that is a very legacy way of doing commands and is not recommended.
 */
API.onChatMessage = {};

/**
 * onChatMessage callback function
 * @callback onChatMessageCallback
 */

/**
 * Connects a callback with the event
 */
API.onChatMessage.connect = function(callback) {}

/**
 *
 */
API.onChatCommand = {};

/**
 * onChatCommand callback function
 * @callback onChatCommandCallback
 */

/**
 * Connects a callback with the event
 * @param {onChatCommandCallback} callback
 */
API.onChatCommand.connect = function(callback) {}

/**
 * This type of event is mainly used for handling stuff after the resource has been initiated.
 */
API.onResourceStart = {};

/**
 * onResourceStart callback function
 * @callback onResourceStartCallback
 */

/**
 * Connects a callback with the event
 */
API.onResourceStart.connect = function(callback) {}

/**
 * This type of event is mainly used for handling stuff before resource termination.
 */
API.onResourceStop = {};

/**
 * onResourceStop callback function
 * @callback onResourceStopCallback
 */

/**
 * Connects a callback with the event
 */
API.onResourceStop.connect = function(callback) {}

/**
 * This type of event is mainly used for iterating code at a tick rate of 120Hz.
 */
API.onUpdate = {};

/**
 * onUpdate callback function
 * @callback onUpdateCallback
 */

/**
 * Connects a callback with the event
 */
API.onUpdate.connect = function(callback) {}

/**
 * This event is triggered when entity data changes.
 */
API.onEntityDataChange = {};

/**
 * onEntityDataChange callback function
 * @callback onEntityDataChangeCallback
 */

/**
 * Connects a callback with the event
 */
API.onEntityDataChange.connect = function(callback) {}

/**
 *
 */
API.onPlayerPickup = {};

/**
 * onPlayerPickup callback function
 * @callback onPlayerPickupCallback
 */

/**
 * Connects a callback with the event
 */
API.onPlayerPickup.connect = function(callback) {}

/**
 * This type of event is used for handling code when the player enters any type of vehicle.
 */
API.sendChatMessage = {};

/**
 * sendChatMessage callback function
 * @callback sendChatMessageCallback
 */

/**
 * Connects a callback with the event
 * @param {sendChatMessageCallback} callback
 */
API.sendChatMessage = function(callback) {}

/**
 * This type of event is used for handling code when the player exits any type of vehicle.
 */
API.onPlayerExitVehicle = {};

/**
 * onPlayerExitVehicle callback function
 * @callback onPlayerExitVehicleCallback
 */

/**
 * Connects a callback with the event
 */
API.onPlayerExitVehicle.connect = function(callback) {}

/**
 * This event is triggered when a vehicle's health changes.
 */
API.onVehicleHealthChange = {};

/**
 * onVehicleHealthChange callback function
 * @callback onVehicleHealthChangeCallback
 */

/**
 * Connects a callback with the event
 */
API.onVehicleHealthChange.connect = function(callback) {}

/**
 * This event is triggered when a player's health changes.
 */
API.onPlayerHealthChange = {};

/**
 * onPlayerHealthChange callback function
 * @callback onPlayerHealthChangeCallback
 */

/**
 * Connects a callback with the event
 */
API.onPlayerHealthChange.connect = function(callback) {}

/**
 * This event is triggered when player armor change.
 */
API.onPlayerArmorChange = {};

/**
 * onPlayerArmorChange callback function
 * @callback onPlayerArmorChangeCallback
 */

/**
 * Connects a callback with the event
 */
API.onPlayerArmorChange.connect = function(callback) {}

/**
 * This event is triggered when a player changes weapon.
 */
API.onPlayerWeaponSwitch = {};

/**
 * onPlayerWeaponSwitch callback function
 * @callback onPlayerWeaponSwitchCallback
 */

/**
 * Connects a callback with the event
 */
API.onPlayerWeaponSwitch.connect = function(callback) {}

/**
 * This event is triggered when siren toggle.
 */
API.onVehicleSirenToggle = {};

/**
 * onVehicleSirenToggle callback function
 * @callback onVehicleSirenToggleCallback
 */

/**
 * Connects a callback with the event
 */
API.onVehicleSirenToggle.connect = function(callback) {}

/**
 * This event is triggered when a vehicle door break.
 */
API.onVehicleDoorBreak = {};

/**
 * onVehicleDoorBreak callback function
 * @callback onVehicleDoorBreakCallback
 */

/**
 * Connects a callback with the event
 */
API.onVehicleDoorBreak.connect = function(callback) {}

/**
 * This event is triggered when a vehicle window get smashed.
 */
API.onVehicleWindowSmash = {};

/**
 * onVehicleWindowSmash callback function
 * @callback onVehicleWindowSmashCallback
 */

/**
 * Connects a callback with the event
 */
API.onVehicleWindowSmash.connect = function(callback) {}

/**
 * This event is triggered when a vehicle tyre burst.
 */
API.onVehicleTyreBurst = {};

/**
 * onVehicleTyreBurst callback function
 * @callback onVehicleTyreBurstCallback
 */

/**
 * Connects a callback with the event
 */
API.onVehicleTyreBurst.connect = function(callback) {}

/**
 * This event is triggered when a player change model.
 */
API.onPlayerModelChange = {};

/**
 * onPlayerModelChange callback function
 * @callback onPlayerModelChangeCallback
 */

/**
 * Connects a callback with the event
 */
API.onPlayerModelChange.connect = function(callback) {}

/**
 * This event is triggered when a player detonate stickies.
 */
API.onPlayerDetonateStickies = {};

/**
 * onPlayerDetonateStickies callback function
 * @callback onPlayerDetonateStickiesCallback
 */

/**
 * Connects a callback with the event
 */
API.onPlayerDetonateStickies.connect = function(callback) {}

/**
 * This event triggers the first time a certain key is pressed, and if held down, it repeats after that.
 */
API.onKeyDown = {};

/**
 * onKeyDown callback function
 * @callback onKeyDownCallback
 */

/**
 * Connects a callback with the event
 * @param {onKeyDownCallback} callback
 */
API.onKeyDown.connect = function(callback) {}

/**
 * Triggers every time a key on the keyboard is released.
 */
API.onKeyUp = {};

/**
 * onKeyUp callback function
 * @callback onKeyUpCallback
 */

/**
 * Connects a callback with the event
 * @param {onKeyUpCallback} callback
 */
API.onKeyUp.connect = function(callback) {}

/**
 * Called every time the Server triggers a clientside event.
 */
API.onServerEventTrigger = {};

/**
 * onServerEventTrigger callback function
 * @callback onServerEventTriggerCallback
 */

/**
 * Connects a callback with the event
 * @param {onServerEventTriggerCallback} callback
 */
API.onServerEventTrigger.connect = function(callback) {}

/**
 * This event is triggered when an entity is streamed in. (streaming distance is changeable in the settings.xml)
 */
API.onEntityStreamIn = {};

/**
 * onEntityStreamIn callback function
 * @callback onEntityStreamInCallback
 */

/**
 * Connects a callback with the event
 */
API.onEntityStreamIn.connect = function(callback) {}

/**
 * This event is triggered when an entity is streamed out (if its too far away). (streaming distance is changeable in the settings.xml)
 */
API.onEntityStreamOut = {};

/**
 * onEntityStreamOut callback function
 * @callback onEntityStreamOutCallback
 */

/**
 * Connects a callback with the event
 */
API.onEntityStreamOut.connect = function(callback) {}

/**
 * Called when the client receives custom data transfered via downloadData by the server.
 */
API.onCustomDataReceived = {};

/**
 * onCustomDataReceived callback function
 * @callback onCustomDataReceivedCallback
 */

/**
 * Connects a callback with the event
 * @param {onCustomDataReceivedCallback} callback
 */
API.onCustomDataReceived.connect = function(callback) {}

/**
 * Triggered when a player gains damage, no matter be it self inflicted, recieved from any other player or other how.
 */
API.onLocalPlayerDamaged = {};

/**
 * onLocalPlayerDamaged callback function
 * @callback onLocalPlayerDamagedCallback
 */

/**
 * Connects a callback with the event
 * @param {onLocalPlayerDamagedCallback} callback
 */
API.onLocalPlayerDamaged.connect = function(callback) {}

/**
 * This event triggers the first time a certain key is pressed, and if held down, it repeats after that.
 */
API.onKeyDown = {};

/**
 * onKeyDown callback function
 * @callback onKeyDownCallback
 */

/**
 * Connects a callback with the event
 * @param {onKeyDownCallback} callback
 */
API.onKeyDown.connect = function(callback) {}

/**
 * Triggers every time a key on the keyboard is released.
 */
API.onKeyUp = {};

/**
 * onKeyUp callback function
 * @callback onKeyUpCallback
 */

/**
 * Connects a callback with the event
 * @param {onKeyUpCallback} callback
 */
API.onKeyUp.connect = function(callback) {}

/**
 * Called every time the Server triggers a clientside event.
 */
API.onServerEventTrigger = {};

/**
 * onServerEventTrigger callback function
 * @callback onServerEventTriggerCallback
 */

/**
 * Connects a callback with the event
 * @param {onServerEventTriggerCallback} callback
 */
API.onServerEventTrigger.connect = function(callback) {}

/**
 * This event is triggered when an entity is streamed in. (streaming distance is changeable in the settings.xml)
 */
API.onEntityStreamIn = {};

/**
 * onEntityStreamIn callback function
 * @callback onEntityStreamInCallback
 */

/**
 * Connects a callback with the event
 */
API.onEntityStreamIn.connect = function(callback) {}

/**
 * This event is triggered when an entity is streamed out (if its too far away). (streaming distance is changeable in the settings.xml)
 */
API.onEntityStreamOut = {};

/**
 * onEntityStreamOut callback function
 * @callback onEntityStreamOutCallback
 */

/**
 * Connects a callback with the event
 */
API.onEntityStreamOut.connect = function(callback) {}

/**
 * Called when the client receives custom data transfered via downloadData by the server.
 */
API.onCustomDataReceived = {};

/**
 * onCustomDataReceived callback function
 * @callback onCustomDataReceivedCallback
 */

/**
 * Connects a callback with the event
 * @param {onCustomDataReceivedCallback} callback
 */
API.onCustomDataReceived.connect = function(callback) {}

/**
 * Triggered when a player gains damage, no matter be it self inflicted, recieved from any other player or other how.
 */
API.onLocalPlayerDamaged = {};

/**
 * onLocalPlayerDamaged callback function
 * @callback onLocalPlayerDamagedCallback
 */

/**
 * Connects a callback with the event
 * @param {onLocalPlayerDamagedCallback} callback
 */
API.onLocalPlayerDamaged.connect = function(callback) {}
