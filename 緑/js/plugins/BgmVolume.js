//=============================================================================
// RPG Maker MZ - Eardrum Guard
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Turn down the volume overall.
 * @author gabacho(Ichiro Meiken)
 * @url https://star-write-dream.com/
 * @help GABA_EardrumGuard.js(ver1.0.2)
 *
 * Turn down the volume overall.
 * It is like a master volume that players can not change.
 *
 * --------------------------
 * Copyright (c) 2020 Gabacho(Ichiro Meiken)
 * Released under the MIT license
 * https://opensource.org/licenses/mit-license.php
 * --------------------------
 *
 * @param coefficient
 * @text volume
 * @type number
 * @desc Set the volume in %. (default: 20)
 * @max 100
 * @min 1
 * @default 20
 * @decimals 0
 *
 */

/*:ja
 * @target MZ
 * @plugindesc �渇���������������障����
 * @author �������э�羣�����㍼�
 * @url https://star-write-dream.com/
 *
 * @help GABA_EardrumGuard.js(ver1.0.2)
 *
 * �渇���������������障����
 * �����ゃ�ゃ�若��紊��眼�с���������鴻�帥�若�����ャ�若���帥�����������с����
 *
 * --------------------------
 * Copyright (c) 2020 Gabacho(Ichiro Meiken)
 * Released under the MIT license
 * https://opensource.org/licenses/mit-license.php
 * --------------------------
 *
 * @param coefficient
 * @text 篆���
 * @type number
 * @desc �渇����%�ц┃絎����障����鐚������わ�20鐚�
 * @max 100
 * @min 1
 * @default 20
 * @decimals 0
 *
 */

(() => {
	"use strict";
	const pluginName = "GABA_EardrumGuard";

	const parameters = PluginManager.parameters(pluginName);
	const coefficient = (Number(parameters["coefficient"]) || 20) / 100;

	const _AudioManager_updateBufferParameters = AudioManager.updateBufferParameters;
	AudioManager.updateBufferParameters = function (buffer, configVolume, audio) {
		_AudioManager_updateBufferParameters.apply(this, arguments);
		if (buffer && audio) {
			buffer.volume *= coefficient;
		}
	};
})();