/*
 * Copyright (c) 2015 - 2017 Samsung Electronics Co., Ltd All Rights Reserved
 *
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var capabilityColorTemperature = {
	'href' : "/capability/colorTemperature/main/0",

	'update' : function() {
		ocfDevice.getRemoteRepresentation(this.href, this.onRepresentCallback);
	},

	'onRepresentCallback' : function(result, deviceHandle, uri, rcsJsonString) {
		scplugin.log.debug(className, arguments.callee.name, result);
		scplugin.log.debug(className, arguments.callee.name, uri);

		if (result == "OCF_OK" || result == "OCF_RESOURCE_CHANGED" || result == "OCF_RES_ALREADY_SUBSCRIBED") {
			var range = [0,0];
			range = rcsJsonString["range"];
			if (range[0] > rcsJsonString["ct"])
				document.getElementById("color_temperature").innerHTML = range[0] + "k";
			else if(range[1] < rcsJsonString["ct"])
				document.getElementById("color_temperature").innerHTML = range[1] + "k";
			else
				document.getElementById("color_temperature").innerHTML = rcsJsonString["ct"] + "k";
		}
	}
}
