import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Metrics, MetricsKey, MetricsService, Thread, ThreadDump } from './metrics.service';
import { flatMap } from 'rxjs/operators';

@Component({
    selector: 'jhi-metrics',
    templateUrl: './metrics.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MetricsComponent implements OnInit {
    metrics?: Metrics;
    threads?: Thread[];
    updatingMetrics = true;

    constructor(private metricsService: MetricsService, private changeDetector: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.refresh();
    }

    refresh(): void {
        this.updatingMetrics = true;
        this.metricsService
            .getMetrics()
            .pipe(
                flatMap(
                    () => this.metricsService.threadDump(),
                    (metrics: Metrics, threadDump: ThreadDump) => {
                        this.metrics = metrics;
                        this.threads = threadDump.threads;
                        this.updatingMetrics = false;
                        this.changeDetector.detectChanges();
                    }
                )
            )
            .subscribe();
    }

    metricsKeyExists(key: MetricsKey): boolean {
        return this.metrics && this.metrics[key];
    }

    metricsKeyExistsAndObjectNotEmpty(key: MetricsKey): boolean {
        return this.metrics && this.metrics[key] && JSON.stringify(this.metrics[key]) !== '{}';
    }
}
