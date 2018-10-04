import { map, pairwise } from 'rxjs/operators';
import { timer, animationFrameScheduler, Scheduler } from 'rxjs';

export default (
    interval: number,
    timeProvider: (...args: any[]) => number = () => performance.now(),
    scheduler: Scheduler = animationFrameScheduler,
  ) =>
    timer(0, interval, scheduler).pipe(
      map(timeProvider), //Map the ticks from the to the value returned by the time provider.
      pairwise(), //Group ticks into pairs, so we can calculate the difference.
      map(([prev, curr]) => curr - prev), //Get time that has passed since last tick.
    );
