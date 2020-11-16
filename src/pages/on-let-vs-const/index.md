---
title: Про let и const
date: '2019-12-22'
author: Dan Abramov
origin: https://overreacted.io/on-let-vs-const/
---

В моём [предыдущем посте](https://overreacted.io/what-is-javascript-made-of/) был такой параграф:

>_**`let`** vs **`const`** vs **`var`**: Обычно вам нужнно использовать `let`. Если вам необходимо запретить присваивание переменной, вы можете использовать `const`. (Иногда код и ваши колеги достаточно педантичны и настаивают на том что бы использовали `const` там, где есть только одно присовоение)._

Это заявление оказалось довольно спорным, вызвав споры в Twitter и Reddit. Кажется, что большинство взглядов (или по крайней мере наиболее громко звучащие) склоняются к _использованию `const` везде где возможно_, возвращась к `let` только при необходимости, чего можно добится с правилом [`prefer-const`](https://eslint.org/docs/rules/prefer-const) ESLint. 

В этом посте я кратко резюмирую некоторые аргументы и контр-аргументы с которыми я столкнулся, так же дам моё личное заключение по этому вопросу.

## Почему использовать `prefer-const`
* **Один способ написания**: ментально тяжело каждый раз выбирать между `let` и `const`. Такое правило как “всегда использовать `const` где возможно” позволяет вам не думать о нём и может быть настроено линтером.

* **Перезначение значения может вызвать баги**: в длинной функции легче пропустить момент когда переменная получает новое значение.  Это может вызывать баги. В частности в замыканиях, `const` даёт вам уверенность в том, что вы всегда “увидите” тоже значение.

* **Изучение мутаций**: новички в JavaScript часто путаются, думаю что `const` встраивает иммутабельность. Важно понимать разницу между мутацией переменной и присвоенем ей значения. Использование `const` принуждает вас понять эту разницу на ранней стадии.

* **Бессмысленные присвоения**: иногда присвоение не имеет смысла. Например, с React Hooks, значения которые вы получаете из `useState` больше напоминают параметры. Они текут в одном направлении. Увидев ошибку в их присвоении вы сможете раньше понять о потоке данных в React`е

* **Прирост производительности**: существует мнение, что движки JavaScript могут работать быстрее с кодом в котором есть `const` из-за того что переменная не будет переназначена.


## Почему не использовать `prefer-const`

* **Потеря намерения**: если мы будем использовать `const` везде где cможем, мы потеряем способность сообщать, было ли действительно *важно* что-либо не переназначать.


* **Путаница с иммутабельностю**: В любой дискуссии о том почему вам лучше предпочитать `const`, всегда найдётся тот кто запутается с иммутабельностью. Это неудивительно, ведь присвоение и мутирование используют один и тот же оператор `=`. В ответ людям говорят "просто лучше изуйчайте язык". Контр-аргументом здесь будет следующее: если фича, которая должна помогать новичкам избегать ошибок - путает, то она не очень полезна. И к сожалению это не помогает избежать ошибок с мутацией, которые распространяются на модули и влияют на всех.


* **Избегать повторного объявления**: Кодовая база с принципом "приоритет `const`" создаёт давление, которое может помешать вам использовать `let` при присвоении переменным значения с условием. Например, вы можете написать `const a = condition ? b : c` вместо условия с `if`, даже если оба значения `b`, `c` запутанны и давать им специальные имена неудобно.

* **Переприсваивание могут не вызывать баги**: Есть три общих случая когда переприсваивание может вызвать баги: когда скоуп очень большой (например, скоуп модуля или большой функции), когда значение - параметр (неожиданно, если значение будет равно чему-либо, кроме того что было передано) и когда переменная используется во вложенной функции. Тем не менее, во многих случаях большинство переменных не подходят под эти требования и параметры вовсе не могут быть помечены как константы.

* **Reassignments May Not Cause Bugs**: There are three common cases when reassignments cause bugs: when the scope is very large (such as module scope or huge functions), when the value is a parameter (so it's unexpected that it would be equal to something other than what was passed), and when a variable is used in a nested function. However, in many codebases most variables won't satisfy either of those cases, and parameters can't be marked as constant at all.

* **Нет прироста производительности**: Я думаю, что движки уже знают, о переменных, которым присвоено значение только один раз - даже если вы используете `var` или `let`. Если мы не согласны с этим, то с таким же успехом мы можем утверждать, что дополнительные проверки могут скорее *увеличить* цену произвидительности, чем снизить её. Но на самом деле, движки достаточно умны.

## Заключение

Мне всё равно.

Я буду следовать тому соглашению, которое уже существует в коде.

Если вам не всё равно - используйте линтер, он будет автоматически проверять и фиксить ваш код, поэтому изменение `let` на `const` не будет задержкой на код-ревью.

Помните что линтеры существуют для того что бы служить *вам*. Если правило линтера раздражают вас и вашу команду, удалите его. Возможно оно не столи того. Учитесь на своих ошибках.

