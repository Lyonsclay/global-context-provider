This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Store
`src/store.js`

This is really a combination of global data and various methods accessing and
updating the global data.

The store is provided through `StuffProvider` and must wrap the components that
"subscribe" to the global store.

## Main App
`src/app.js`

In this case the whole `App` is wrapped with the provider and the child
components import the global store with the `useContext` hook provided by React.

We can then place a `useContext` hook in any component even a nested one that
lives under the global `Provider`. 

This is a completely new way of sharing state and one that is much easier to
code. No longer do we have to use classes and wrap functions with
`Context.Consumers`. The resulting code is much flatter and more composable. 


:bowtie: 😄 😆 😊 😃 ☺️ 😏 😍 😘 😚 😳 😌 😆 😁 😉 😜 😝 😀 😗 😙 😛 😴 😟 😦 😧 😮 😬 😕 😯 😑 😒 😅 😓 😥 😩 😔 😞 😖 😨 😰 😣 😢 😭 😂 😲 😱 :neckbeard: 😫 😠 😡 😤 😪 😋 😷 😎 😵 👿 😈 😐 😶 😇 👽 💛 💙 💜 ❤️ 💚 💔 💓 💗 💕 💞 💘 💖 ✨ ⭐️ 🌟 💫 💥 💥 💢 ❗️ ❓ ❕ ❔ 💤 💨 💦 🎶 🎵 🔥 💩 💩 💩 👍 👍 👎 👎 👌 👊 👊 ✊ ✌️ 👋 ✋ ✋ 👐 ☝️ 👇 👈 👉 🙌 🙏 👆 👏 💪 🤘 🖕 🚶 🏃 🏃 👫 👪 👬 👭 💃 👯 🙆 🙅 💁 🙋 👰 🙎 🙍 🙇 :couplekiss: 💑 💆 💇 💅 👦 👧 👩 👨 👶 👵 👴 👱 👲 👳 👷 👮 👼 👸 😺 😸 😻 😽 😼 🙀 😿 😹 😾 👹 👺 🙈 🙉 🙊 💂 💀 🐾 👄 💋 💧 👂 👀 👃 👅 💌 👤 👥 💬 💭 :feelsgood: :finnadie: :goberserk: :godmode: :hurtrealbad: :rage1: :rage2: :rage3: :rage4: :suspect: :trollface: Nature

☀️ ☔️ ☁️ ❄️ ⛄️ ⚡️ 🌀 🌁 🌊 🐱 🐶 🐭 🐹 🐰 🐺 🐸 🐯 🐨 🐻 🐷 🐽 🐮 🐗 🐵 🐒 🐴 🐎 🐫 🐑 🐘 🐼 🐍 🐦 🐤 🐥 🐣 🐔 🐧 🐢 🐛 🐝 🐜 🐞 🐌 🐙 🐠 🐟 🐳 🐋 🐬 🐄 🐏 🐀 🐃 🐅 🐇 🐉 🐐 🐓 🐕 🐖 🐁 🐂 🐲 🐡 🐊 🐪 🐆 🐈 🐩 🐾 💐 🌸 🌷 🍀 🌹 🌻 🌺 🍁 🍃 🍂 🌿 🍄 🌵 🌴 🌲 🌳 🌰 🌱 🌼 🌾 🐚 🌐 🌞 🌝 🌚 🌑 🌒 🌓 🌔 🌕 🌖 🌗 🌘 🌜 🌛 🌔 🌍 🌎 🌏 🌋 🌌 ⛅️ :octocat: :shipit: Objects

🎍 💝 🎎 🎒 🎓 🎏 🎆 🎇 🎐 🎑 🎃 👻 🎅 🎄 🎁 🔔 🔕 🎋 🎉 🎊 🎈 🔮 💿 📀 💾 📷 📹 🎥 💻 📺 📱 ☎️ ☎️ 📞 📟 📠 💽 📼 🔉 🔈 🔇 📢 📣 ⌛️ ⏳ ⏰ ⌚️ 📻 📡 ➿ 🔍 🔎 🔓 🔒 🔏 🔐 🔑 💡 🔦 🔆 🔅 🔌 🔋 📲 ✉️ 📫 📮 🛀 🛁 🚿 🚽 🔧 🔩 🔨 💺 💰 💴 💵 💷 💶 💳 💸 📧 📥 📤 ✉️ 📨 📯 📪 📬 📭 📦 🚪 🚬 💣 🔫 🔪 💊 💉 📄 📃 📑 📊 📈 📉 📜 📋 📆 📅 📇 📁 📂 ✂️ 📌 📎 ✒️ ✏️ 📏 📐 📕 📗 📘 📙 📓 📔 📒 📚 🔖 📛 🔬 🔭 📰 🏈 🏀 ⚽️ ⚾️ 🎾 🎱 🏉 🎳 ⛳️ 🚵 🚴 🏇 🏂 🏊 🏄 🎿 ♠️ ♥️ ♣️ ♦️ 💎 💍 🏆 🎼 🎹 🎻 👾 🎮 🃏 🎴 🎲 🎯 🀄️ 🎬 📝 📝 📖 🎨 🎤 🎧 🎺 🎷 🎸 👞 👡 👠 💄 👢 👕 👕 👔 👚 👗 🎽 👖 👘 👙 🎀 🎩 👑 👒 👞 🌂 💼 👜 👝 👛 👓 🎣 ☕️ 🍵 🍶 🍼 🍺 🍻 🍸 🍹 🍷 🍴 🍕 🍔 🍟 🍗 🍖 🍝 🍛 🍤 🍱 🍣 🍥 🍙 🍘 🍚 🍜 🍲 🍢 🍡 🥚 🍞 🍩 🍮 🍦 🍨 🍧 🎂 🍰 🍪 🍫 🍬 🍭 🍯 🍎 🍏 🍊 🍋 🍒 🍇 🍉 🍓 🍑 🍈 🍌 🍐 🍍 🍠 🍆 🍅 🌽 

