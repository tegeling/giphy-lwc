# Salesforce Lightning Web Component LWC for dynamic Giphy content
This repository contains a Salesforce LWC to dynamically or statically show animated gifs from Giphy based on various search criteria.

The component can be used on any Lightning home page, app page or record page.
When used on a record page, the current record can be referenced with the keyword `this`.

For more details about Giphy API, please refer to https://developers.giphy.com/

## Setup steps
1. Deploy this component
2. Configure your Salesforce org

The base URL `https://api.giphy.com` must be added to the Content Security Policy CSP Trusted Sites in Setup.
3. Create a Giphy app

First thing to do is to create a [Giphy app] https://developers.giphy.com/dashboard/?create=true
You need the Giphy API key to configure thie component.
4. Add this component to any Lightning home page, app page or record page and configure the properties.

## Properties
|Name|Type|Description|
|---|---|---|
|Giphy API Key|string|Enter your Giphy API Key|
|Giphy Source Type|picklist (Static URL, Static Search Term, Dynamic Search Term)|Static or Dynamic Giphy Source|
|Static Giphy URL|string|This is the URL path to any Giphy content (like https://media.giphy.com/media/3oz8xFhzFLuJ1SZo8o/giphy.gif)|
|Static Search Term|string|Type in any search terms (like 'put that coffee down')|
|API Object Name (*future use*)|string|Dynamic Search Term based on Object Name|
|API Field Name (*future use*)|string|Dynamic Search Term based on Field Name|
|Giphy Rating|picklist (G, PG, PG-13, R)|Giphy Content Rating from all ages (G) to strong language (R)|
