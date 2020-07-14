---
title: 'Элементы UI разработки'
date: '2018-12-30'
author: Dan Abramov
origin: https://overreacted.io/the-elements-of-ui-engineering/
---

В моём [предыдущем посте](/things-i-dont-know-as-of-2018/) я говорил о том, что нужно допускать, что в наших знаниях
есть пробелы. Вы можете подумать, что я предлагаю c этим смириться. Нет!

Я абсолютно уверен, что вы можете начать свой путь откуда угодно и вам не нужно учить технологии в какой-то определённой последовательнсти. Но я так же высоко ценю получение компетенции. Лично я наиболее всего заинтересован в создании пользовательских интерфейсов.

**Я размышляю над тем, что я знаю и считаю ценным.** Конечно, я знаком с несколькими технологиями (javascript и react). Но наиболее важные уроки полученные из опыта - неуловимы. Я никогда не пытался обернуть их в слова. Это моя первая попытка упорядочить и описать некоторые из таких уроков/наблюдений.

---

Существует множество “роадмапов” для различных технологиий и библиотек. Кто знает какая библиотека будет модной в 2019 году? Что на счёт 2020 года? Должны вы учить Vue или React? Может Angular? Redux или Rx? Нужно ли вам учить Apollo? Rest или GraphQL? Во всём этом очень легкго запутаться. А что если автор не прав?

**Мои самые большие прорывы в обучении были связанны не с конкретным технологиями.** Продуктивнее я учился, когда я старался решить конкретную проблему связанную с UI.
Иногда я находил уже готовые библиотеки или паттерны которые помогали мне, в других случаях я решал проблему своими силами, решения могли быть как хорошими, так и плохими.

Именно комбинация понимания *проблем*, экспериментов с различными вариантами *решения* и применение различных *стратегий* вела меня к наиболее ценному опыту обучения в моей жизни. **Этот пост фокусируется только на проблемах.**

---

Если вы работали с пользовательским интерфейсом, вы хотя бы несколько раз должны были столкнуться с такими проблемами сами напрямую, либо используя библиотеки. В любом случае, я призываю вас создать хотя бы маленькое приложение _без_ использования каких-либо библиотек и попробовать поиграть с ним воспроизводя и решая эти проблемы. Для таких проблем нет единственного верного решения. Понимание приходит от изучения проблемы и попыток применения различных компромиссов.

---

* **Консистентность.** Вы кликаете на кнопку "лайк" и текст обновляется: "Вы и 3 других друга лайкнули этот пост". Если вы кликнете на эту кнопку ещё раз, то текст вернётся в изначальное состояние. Звучит лекго. Но возможно, такой компонент с лайком находится ещё в нескольких местах на экране. Возможно, есть ещё какой-то визуальный индикатор (например бэкграунд кнопки), который должен измениться. Список "лайкеров", который ранее был получен с сервера и был видим при наведении, теперь должен оторбражать и ваше имя. Если вы переместитесь на другую страницу и вернеться обратно, пост не должен “забыть”, что он был отмечен лайком. Даже локальная целостность уже сама по себе создает некоторые трудности. Но другие пользователи так же могут изменять данные, которые мы оторбражаем
(например, лайкая пост, который мы просматриваем). Как нам поддераживать наши данные в синхронизированном состоянии на разных частях экрана? Как и когда мы будем приводить в соответсвие наши данные с сервером и наоборот?

* **Отзывчивость.** Люди могут терпеть отсутствие реакции интерфейса на свои действия только в течении ограниченного времени. Для *продолжительных* действий во времени, таких как жесты и скролл, такая терпипимость крайне низка. Даже задержка одного из кадров такого действия в 16мс кажется нам раздражающей. Для дискретных действий, таких как клики, есть исследования, говорящие о том, что пользователи воспринимают все задержки до 100мс одинаково быстрыми (не сильно влияющими на пользовательский опыт). Если реакция на действие длиться дольше, нам следует показать визуальный индикатор. Но здесь появляются неочевидные сложности. Индиакаторы, которые заставляют страницу “прыгать” или пройти через несколько “стадий” загрузки могут вызвать ощущение ещё более медленной работы приложения, чем она была на самом деле. С анимацией схожая ситуация: загрузка в 20мс с анимацией будет нам *казаться дольше*, чем подгрузка данных в 30мс но без какой-либо анимации. Наши мозги не проводят тесты производительности. Как мы будем поддерживать наши приложения отзывчивыми к различного рода инпутам?

* **Задержка.** Вычесления и обращение к сети требуют времени. Иногда мы можем игнорировать стоимость вычисления, если это не вредит времени отклика на наших устройствах (убедитесь, что вы протестировали ваше приложение на непроизводительных устройствах). Но задержка сети не избежна и может длится несколько секунд. Наше приложение не должно зависать пока ожидает данные или загружает код. Это значит, что любое действие которое зависит от новых данных, кода или ассетов - потонциально асинхронно и вы должны предусмотреть вариант с долгой загрузкой. Но такое может происходить почти на каждом экране нашего приложения. Как нам изящно справится с задрежкой, при этом не показывая пользователю каскад спиннеров или пустых дыр. Как нам избежать прыгающего интерфейса? И как нам менять асинхронные зависимости без переписывания нашего кода каждый раз?

* **Навигация.** Мы ожидаем от интерфейса стабильности, когда взаимодействуем с ним. Элементы UI не должны исчезать у нас прямо из под носа. Навигация, так же должна уважать этот принцип, неважно была ли она начата внутри приложения или вызвана внешним событием (например, клик по кнопке "назад"). Ещё один пример - переключение между табами `/profile/likes` и `/profile/follows` не должно стирать текс в поисковом инпуте, который находится вне эти двух компонентов. Переход на *другой* экран - это как войти в соседнюю комнтату. Люди ожидают, что могут вернуться назад и увидеть все вещи в том же состоянии, в котором они их оставили (возможно с несколькими новыми предметами). Допустим, вы ждете когда загрузятся новые посты в новостной ленте, и тут вы решаете переместиться на страницу профиля и затем снова возвращаясь назад, тут вас настигает большое разочарование - вы потеряли свой прогресс в получении данных и вам придётся снова загружать их заново. Как нам построить архитектуру приложения так, что бы произвольная или случайная навигация по приложению не приводила к потери важного контекста?

* **Устаривание дынных.** Мы можем сделать навигацию по кнопке “назад” мгновенной, введя локальный кеш. Этот кэш может запомнить данные для быстрого доступа к ним, даже если теоретически мы можем их снова подгрузить с сервера. Но кэширование несёт с собой свои проблемы. Кэш может устрареть. Если я поменяю аватар, он должен обновиться так же и в кэше. Если я оставлю новый пост, он должен мгновенно появится в кэше, либо кэш должен быть сброшен. Это решение может стать сложным и склонным к ошибкам. Что если запрос с отправкой моего поста не выполнится? Как долго кэш будет находиться в памяти? Когда мы повторно подгружаем нвостную ленту, должны ли мы “сшить” новые данные с кэшом или выбросить весь кэш? Как пагинация или сортировака будут представленны в кэше?

* **Энтропия.** Второй закон термодинамики гласит что-то вроде: "со временем, всё превращается в беспорядок" (ну не совсем точно). Это так же приминимо и к UI. Мы не можем точно предсказать пользовательские взаимодействия с интерфейсом и их порядок. В любой момент времени, наше приложение может находится в одном из состояний, коих немыслимое количество. Мы стараемся изо всех сел, что бы сделать результат предсказуемым и ограничынным нашей задумкой. Мы не хотим смотреть на скриншот с багом и удивляться "как же _это_ произошло?" Для *N* возможных состояний существует *N×(N–1)* возможных переходов между ними. Например, если кнопка может быть в одном из 5 состояний (normal, hover, active, danger, disabled), код обновляющий кнопку должен быть корректным для 5×4=20 (следуя формуле) возможных переходов - или запрещать некоторые из них. Как укротить комбинаторный взрыв возможных состояний и сделать предсказуемым визуальный вывод?

* **Приоритет.** Некоторые вещи важнее других. Диалоговое окно может появиться физически "над" кнопкой которая вызвала его появление и выйти из границ своего контейнера. Новая задача (например, ответить на клик) может быть важнее чем длинная задача которая была начата ранее (например, ренлер слудующих постов, которые в данный момент лежат за границей экрана). По мере того как наше приложение растёт, части его кода написанные разными людьми и командами, могут конкурировать между собой за ограниченные ресурсы, такие как процессор, доступ к сети, пространство дисплея, размер конечного бандла. Иногда вы можете ранжировать таких конкурентов по некой "шкале важности", как в случае с CSS свойством `z-index`. [Но это редко заканчивается хорошо.](https://blogs.msdn.microsoft.com/oldnewthing/20050607) Все разработчики тенденциозны думать, что _их_ код важнее. И если всё одинаково важно, тогда ничего не важно! Как мы заставим независимые виджеты *кооперировать* друг с другом вместо того, что бы бороться за ресурсы?

* **Доступность.** Недоступные сайты *не являются* маленькой проблемой. Например, в Великобритании инвалидность влияет на 1 из 5 людей. [(Тут хорошая инфографика)](https://www.abrightclearweb.com/web-accessibility-in-..). Я так же ощущаю это на себе. Не смотря на то что мне только 26, я испытываю трудности с прочтением сайтов с тонкими шрифтами и низким контрастом. Я стараюсь меньше пользоваться трэкпадом, и я побаиваюсь того дня, когда мне придётся использовать сайт с плохой поддержкой навигации по клавиатуре. Нам нужно делать наши приложения не такими ужасными для людей с трудностями - и хорошая новость в том, что уже есть много низко висящих фруктов. Всё начинается с образования и выбора инструментов. Но нам так же нужно не усложнять разработку продуктовым разработчикам. Что мы можем сделать что бы доступность сайтов для людей с трудностями было по *дефолту* а не после всго остального?

* **Интернационализация.** Наше приложение должно работать по всему миру. Речь не только о разных языках, но и о письме. Мы должны поддерживать письменность справо налево с наименьшми усилиями от разработчиков. Как мы будем поддерживать разные языки, не жертвуя задержкой и отзывчивостью?

* **Доставка.** Нам нужно, что бы код нашего приложения был доставлен на компьютер пользователя. Какой транспорт и формат мы используем? Это может звучать очевидно но здесь много компромиссов. Например, нативные приложения имеют тенденцию к загрузке всего кода заранее даже несмотря на то что приложение может быть большим. Веб приложения чаще имеют малый размер по началу, но за счёт большей задержки во время использования. Как нам выбрать, в какой момент ввести эту задержку? Как нам оптимизировать нашу доставку, основонную на паттернах использования? Какой тип данных нам потребуется для оптимального решения?

* **Упругость.** Должно быть вы любите жуков (bugs) если вы энтомолог, но вы наврятли наслаждаетесь видя их в ваших программах. Тем не менее, некоторые из ваших багов неизбежно попадут в продакшн. Что тогда произойдёт? Некоторые баги вызывают неправильное но четко определенное поведение. Например, возможно ваш код отображает некорректный визуальный контент при каком-то условии. Но что, если код рендера *крашется*? Тогда мы не сможем осмысленно продолжить потому, что визуальный контент будет неустойчивым. Падение при рендере одного поста не должно ломать остальную ленту постов или приводить к полу-рабочему состоянию, которое в свою очередь порождает свои проблемы. Как нам писать код таким образом, что бы изолировать ошибки при рендере и загрузки данных и остальная часть нашего приложения могла работать дальше? Что означает отказоустойчивость для пользовательского интерфейса?

* **Абстракция.** В маленьком приложении мы можем захардкодить многие из вариантов проблем описанных выше, что бы избежать их. Но наше приложение будет расти. Мы хотим что бы у нас была возможность [переиспользовать, форкать, и соединять](/optimized-for-change/) части нашего кода и работать над ним коллективно. Мы хотим определить четкие границы между частями, которые знакомы разным людям и не хотим делать часто меяющуюся логику слишком негибкой. Как нам создать абстракцию которая спрячет реализацю некоторых деталей конкретной части пользовательского интерфейса? Как нам избежать повторения тех же проблем, которые мы только что решили, по мере роста нашего приложения?

---

Конечно, ещё много проблем, которые я не упомянул. Этот список ни в коем случае не является исчерпывающим! Например, я не говорил о сотрудничестве между дизайнерами и разработчиками или отладки и тестировании. Может в другой раз.

Заманчиво читать об этих проблемах и представлять, с помощью каких библиотек вы могли бы решить эти проблемы. Но я хочу воодушевить вас думать таким образом, как будто этих библиотек не существует и прочитать эту статью заново с этой позиции. Какой *вы* выберите подход для решения этих проблем? Попробуйте на небольшом приложении! (Я бы хотел увидеть ваши эксперименты на GitHub - не стесняйтесь твитнуть мне).

Что интересно в этих проблемах, это то что большинство из них проявляются при любом масштабе. Вы можете видеть их как в небольших виджетах таких как typeahead и тултипах, так и в больших приложениях таких как Twitter и Facebook.

**Подумайте о нетривиальных UI элементах из приложения, которым вам нравится пользоваться и пройдите по списку проблем. Сможете описать компромиссы выбранные разработчикам этого приложения? Попробуйте воссоздать подобное поведение с нуля!**

В UI разработке я многое понял из экспериментов с такими проблемами в маленьких приложениях без использования библиотек. Я рекомендую то же самое для всех, кто хочет получить более глубокое понимание компромиссов в разработке пользовательского интерфейса.