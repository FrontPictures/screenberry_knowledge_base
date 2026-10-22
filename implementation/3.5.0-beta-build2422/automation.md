<!-- Generated from facts.json by tools/implementation.mjs; edit facts.json. -->
# Automation and control nodes

Source snapshot: **3.5.0 beta, source build 2422**. Static implementation review on 2026-10-22. Runtime verification: **not performed**. Product-owner review: **pending**. Applicability to released 3.4: **not established**.

[Evidence and use rules](README.md) · [All topics](README.md#topics)

## CODE-AUTO-002

**DelayAction has one restartable timer**

DelayAction::doProcess starts its timer when In is triggered, then checks Reset and pauses the timer if Reset is triggered. If not paused, it compares elapsed seconds with Delay; on reaching Delay it pauses the timer and sets Out to true. Repeated input restarts the same timer.

Scope: This is one timer, not a queue of independently delayed events. If In and Reset are both triggered in one pass, Reset is handled after In.

Source evidence (original source is not bundled):

- `Nodes/SharedNodes/AutomationNodes/DelayAction.cpp`, lines 20–44; SHA-256 `73923a631caa3553445da6da3ce662549b93264c5d6577682ea9dea2d5747252`.
- `Libs/SBCore/NMTimer.cpp`, lines 26–32; SHA-256 `74f61acd7d65a64a89ffef18ede14ffd56837906c8d5eb62c08a72e0c08810f9`.

## CODE-AUTO-004

**Timecode Events tests exact matches and bounded forward crossings**

TimecodeEvents evaluates mappings when its timecode input is marked changed. Its predicate accepts exact equality. It also accepts a current value above the mapped value by less than 50 when the previous value is below the mapped value by less than 50, or when the previous value is negative.

Scope: The predicate is stated in its timecode-value units. It does not guarantee firing after arbitrary seeks, large jumps or reverse playback.

Source evidence (original source is not bundled):

- `Nodes/SharedNodes/AutomationNodes/TimecodeEvents.cpp`, lines 61–71; SHA-256 `c62e5378150ffb638ef0332261c1de97ee6cf0d2609dff7c71916b11b49edfce`.
- `Nodes/SharedNodes/AutomationNodes/TimecodeEvents.cpp`, lines 101–120; SHA-256 `c62e5378150ffb638ef0332261c1de97ee6cf0d2609dff7c71916b11b49edfce`.

## CODE-PROTOCOL-002

**OSC Sender sends on the Send action**

OscSender::doProcess sends only inside the Send-triggered branch. A Message beginning with { is sent as one string argument to /jsonApi. Otherwise the first space separates the address from the argument string; arguments undergo escape-sequence conversion and UdpStringToArgs parsing. With no space, the entire string is used as an address without arguments.

Scope: Changing Message alone does not enter this send branch. This record does not verify packet delivery or behavior of the receiver.

Source evidence (original source is not bundled):

- `Nodes/SharedNodes/AutomationNodes/OscNodes/OscSender.cpp`, lines 29–61; SHA-256 `a75df307b915347501593dd4b3aced9a3a46395cd97d6fd8947cf0da776f5f8e`.

## CODE-CONTROL-001

**Action/Logic conversion uses state and change flags**

ActionToLogic checks the On input first and the Off input in an else-if branch, updating its boolean output accordingly. LogicToAction checks whether its boolean input is marked changed and sets the corresponding On or Off action output.

Scope: A true logic value does not by itself cause an action on every pass. The lifetime of an unconsumed action depends on graph cleanup.

Source evidence (original source is not bundled):

- `Nodes/SharedNodes/MathNodes/Logic/ActionToLogic.cpp`, lines 35–53; SHA-256 `4a11287caabec9eee1a0c39e7ffb937bc3cce3ab0ee986043fb718056c48541a`.
- `Nodes/SharedNodes/MathNodes/Logic/LogicToAction.cpp`, lines 35–49; SHA-256 `0f60971b8a85715ef21ab754a302e654d0bbe50f31964b3718e00866a002ae22`.

## CODE-CONTROL-002

**Float triggers and inclusive ranges**

FloatToAction classifies its input as zero or nonzero and emits an action on its first update or when that classification changes. doInit also calls updateValues. FloatRange tests Input >= Min and Input <= Max, emits an entry/exit action when that result changes from its previous Output, and calculates Clamped Value separately.

Scope: A change from 1 to 2 does not change the FloatToAction classification. FloatRange changes inside the same range do not by themselves emit another entry action.

Source evidence (original source is not bundled):

- `Nodes/SharedNodes/MathNodes/FloatToAction.cpp`, lines 20–26; SHA-256 `940e9083ce79b759ee6404764a3e0e5e7b664769f3e7811872b584a88e3ab0f3`.
- `Nodes/SharedNodes/MathNodes/FloatToAction.cpp`, lines 28–39; SHA-256 `940e9083ce79b759ee6404764a3e0e5e7b664769f3e7811872b584a88e3ab0f3`.
- `Nodes/SharedNodes/MathNodes/FloatRange.cpp`, lines 30–50; SHA-256 `19c563c0335c491b375ac2ee7817e787c5c6e8525445d72e00cc0379ac588c73`.

## CODE-CONTROL-006

**PID uses the configured time step**

PIDController declares Dt with default 0.0166 and passes it to PID with the gain, output-limit, integral-limit and filter parameters. Processing calculates a result from Target minus Current. PID accumulates filtered error multiplied by Dt, limits the integral, computes a derivative when Dt exceeds 0.000001, and limits the final result to the positive or negative Output Max. Updating configuration calls doInit, which resets PID only when the node was not initialized.

Scope: Dt is an explicit input; this path does not replace it with a measured frame duration. Defaults are not tuning recommendations for physical equipment.

Source evidence (original source is not bundled):

- `Nodes/SharedNodes/MathNodes/PIDController.cpp`, lines 14–21; SHA-256 `cc93fa821be2560b3c2b2ab2dc3deb7672478217de61cefe6d34e15a8d5d6c90`.
- `Nodes/SharedNodes/MathNodes/PIDController.cpp`, lines 34–45; SHA-256 `cc93fa821be2560b3c2b2ab2dc3deb7672478217de61cefe6d34e15a8d5d6c90`.
- `Nodes/SharedNodes/MathNodes/PIDController.cpp`, lines 55–70; SHA-256 `cc93fa821be2560b3c2b2ab2dc3deb7672478217de61cefe6d34e15a8d5d6c90`.
- `Libs/SBCore/PID.cpp`, lines 33–69; SHA-256 `86754df348d141eb16479c224c72b2095e55a398db6499e208add4f2ba0e326b`.
- `Libs/SBCore/PID.cpp`, lines 17–31; SHA-256 `86754df348d141eb16479c224c72b2095e55a398db6499e208add4f2ba0e326b`.
