<?php
return [
'environments' => [
    'production' => [
        'supervisor-1' => [
            'maxProcesses' => 10,
            'balanceMaxShift' => 1,
            'balanceCooldown' => 3,
        ],
        'mixpost-heavy' => [
            'connection' => 'mixpost-redis',
            'queue' => ['publish-post'],
            'balance' => 'auto',
            'processes' => 8,
            'tries' => 1,
            'timeout' => 60 * 60,
        ],
    ],

    'local' => [
        'supervisor-1' => [
            'maxProcesses' => 3,
        ],
        'mixpost-heavy' => [
            'connection' => 'mixpost-redis',
            'queue' => ['publish-post'],
            'balance' => 'auto',
            'processes' => 3,
            'tries' => 1,
            'timeout' => 60 * 60,
        ],
    ],
],
];