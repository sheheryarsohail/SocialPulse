<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     */
    protected function schedule(Schedule $schedule)
    {
        // ...
        $schedule->command('mixpost:run-scheduled-posts')->everyMinute();
        $schedule->command('mixpost:import-account-data')->everyTwoHours();
        $schedule->command('mixpost:import-account-audience')->everyThreeHours();
        $schedule->command('mixpost:process-metrics')->everyThreeHours();
        $schedule->command('mixpost:delete-old-data')->daily();
    }

    /**
     * Register the commands for the application.
     */
    protected function commands(): void
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
