using zaragoza_barbell.Domain.Entities;

namespace zaragoza_barbell.Application.Common.Interfaces;

public interface IApplicationDbContext
{
    DbSet<Mail> Mail { get; }

    Task<int> SaveChangesAsync(CancellationToken cancellationToken);
}
