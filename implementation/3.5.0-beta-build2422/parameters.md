<!-- Generated from facts.json by tools/implementation.mjs; edit facts.json. -->
# Parameter contracts

Source snapshot: **3.5.0 beta, source build 2422**. Static implementation review on 2026-10-22. Runtime verification: **not performed**. Product-owner review: **pending**. Applicability to released 3.4: **not established**.

[Evidence and use rules](README.md) · [All topics](README.md#topics)

## CODE-PARAM-003

**Numeric assignment clamps and marks changed**

NParamDouble::setDoubleValue and NParamInt::setInt64Value clamp the incoming value to their stored minimum and maximum, then call setChanged unconditionally. NParam::setChanged sets a boolean flag.

Scope: A changed flag does not necessarily mean the numeric value differs from its previous value. This statement is scoped to these setters, not every parameter type or NaN behavior.

Source evidence (original source is not bundled):

- `Libs/NodesBase/NParams/NParamDouble.cpp`, lines 8–15; SHA-256 `83ec6ad539877cb4104366ff22a98e0bf6bb55289cfcb30c9dfcb6e5a4021ed8`.
- `Libs/NodesBase/NParams/NParamDouble.cpp`, lines 83–87; SHA-256 `83ec6ad539877cb4104366ff22a98e0bf6bb55289cfcb30c9dfcb6e5a4021ed8`.
- `Libs/NodesBase/NParams/NParamInt.cpp`, lines 85–89; SHA-256 `d5e3871b0863e3473776b481f943ac796ece0c3225ec964537b47164e8bfa2d6`.
- `Libs/NodesBase/NParams/NParam.h`, lines 229–230; SHA-256 `7d58196f327f9238a1a6ed29a19b43efd22fd2ca2fe9b4fd4051ff004557162a`.

## CODE-PARAM-004

**Action values and their short display text have different lifetimes**

NParamAction::triggered returns the current boolean and clears true. setNotChanged also clears it; copyDataFrom transfers true values only, and XML loading resets the action to false. toStringShort uses a separate timer and reports true for less than changeValueTimeoutMs, which is 300 ms.

Scope: An Action is a consumable boolean, not an event counter. The 300 ms text indicator does not mean that the action runs continuously for 300 ms.

Source evidence (original source is not bundled):

- `Libs/NodesBase/NParams/NParamAction.cpp`, lines 10–36; SHA-256 `d9c948d4cca14691c83dca764e1597e9e2245e95fd52a0207532b3bbd78df52e`.
- `Libs/NodesBase/NParams/NParamAction.cpp`, lines 46–66; SHA-256 `d9c948d4cca14691c83dca764e1597e9e2245e95fd52a0207532b3bbd78df52e`.
- `Libs/NodesBase/NParams/NParamAction.h`, lines 37–43; SHA-256 `596d31416484ae34cebd52cbf6e626e61be0f4942942ab9bd2c40f71868fe5db`.

## CODE-PARAM-005

**Message parameters hold a transient queue**

NParamMessages appends messages, pops the oldest one and appends the source queue during copyDataFrom. setNotChanged clears the queue and last-received text. Its serialization sends counters and the last-received message text when full metadata is requested, rather than serializing the full payload queue.

Scope: This parameter is not a durable message log. Delivery and loss behavior depend on its producers, consumers and graph cleanup.

Source evidence (original source is not bundled):

- `Libs/NodesBase/NParams/NParamMessages.cpp`, lines 5–52; SHA-256 `e15f041047e4c6f151c83bfe49e5a220a7b79c22c89c82a31d3c80ebe0363ac6`.
- `Libs/NodesBase/NParams/NParamMessages.cpp`, lines 49–72; SHA-256 `e15f041047e4c6f151c83bfe49e5a220a7b79c22c89c82a31d3c80ebe0363ac6`.

## CODE-PARAM-006

**Visibility, ports, editability and saved values are separate**

NParam stores Hidden, Port and UserEditable as separate properties. A name starting with $ initializes Hidden to true and Port to false. setVisibleAndEditable changes visibility and editability together, without setting Port. Serialization records parameter identity, non-input direction, port/hide flags and the type-specific value. NParamImage and NParamAction implement empty saveValueToXml methods.

Scope: A visible port, editable control and saved value are different properties. These empty value serializers do not save image pixels or a pending Action event into the parameter XML.

Source evidence (original source is not bundled):

- `Libs/NodesBase/NParams/NParam.cpp`, lines 33–77; SHA-256 `333528d416f81f0e1828b3a043396b5a2e9f827616d890d5eeaacf85970190e9`.
- `Libs/NodesBase/NParams/NParam.cpp`, lines 346–360; SHA-256 `333528d416f81f0e1828b3a043396b5a2e9f827616d890d5eeaacf85970190e9`.
- `Libs/NodesBase/NParams/NParamImage.h`, lines 50–51; SHA-256 `1d37ba8206fc7865f5ecabbc010abad57213cc65d37e3edc26b74faae8acc37d`.
- `Libs/NodesBase/NParams/NParamAction.h`, lines 42–43; SHA-256 `596d31416484ae34cebd52cbf6e626e61be0f4942942ab9bd2c40f71868fe5db`.
